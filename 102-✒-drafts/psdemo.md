

```
We import the email function from the other file

. &quot;.\RabbitMqServiceEmail.ps1&quot;

# Url to test at

$url = &quot;http://10.80.8.11:15672/api/queues&quot; 

# Flag file

$flagPath = &quot;./.flag&quot;

# Flag value

$flag = Test-Path $flagPath

# Password

$secpasswd = ConvertTo-SecureString &#39;guest&#39; -AsPlainText -Force

# Credentials object

$credGuest = New-Object System.Management.Automation.PSCredential (&#39;guest&#39;, $secpasswd)

try {

# Call RabbitMQ API with the credentials

$restJSON = Invoke-WebRequest -Uri $url -Credential $credGuest

# Convert from JSON to object

$restObj = $restJSON | ConvertFrom-Json

# Select all queues with less than 1 consumers and are not called grg.dead.queue

$filteredConsumers = $restObj |

Select-Object -Property name, consumers |

Where-Object { $_.consumers -lt 1 -and $_.name -ne &quot;grg.dead.queue&quot; }

# Count them

$consumersLt1 = ( $filteredConsumers | Measure-Object).Count

# If there are more than 0 of them send an email listing all the queues with 0 consumers

if (($consumersLt1 -gt 0) -and !($flag)) {

$body = &quot;$($filteredConsumers | Select-Object -Property @{ Name = &#39; &#39;; Expression = { &quot;Queue $($_.name) has no consumers&quot; } } | Out-String)

`n `n $([System.TimeZoneInfo]::ConvertTimeBySystemTimeZoneId((Get-Date), &#39;Greenwich Standard Time&#39;))&quot;

Send-EMail `

-EmailTo &quot;[mwazzan@globalreachgroup.com](mailto:mwazzan@globalreachgroup.com), [APashkov@globalreachgroup.com](mailto:APashkov@globalreachgroup.com)&quot;`

-Subject &quot;RabbitMQ Monitoring Service: No Consumers Connected&quot; `

-Body $body

Set-Content -Path $flagPath -Value &quot;&quot;

}

elseif (($consumersLt1 -eq 0) -and $flag) {

$body = &quot;All consummers back online&quot;

Send-EMail `

-EmailTo &quot;[mwazzan@globalreachgroup.com](mailto:mwazzan@globalreachgroup.com), [APashkov@globalreachgroup.com](mailto:APashkov@globalreachgroup.com)&quot;`

-Subject &quot;RabbitMQ Monitoring Service: Consumers Online&quot; `

-Body $body

Remove-Item $flagPath

}

}

# If there was an issue with calling the API send an email with HTTP error code and the error message

catch [System.Net.WebException] {

$statusCodeInt = [int]$_.Exception.Response.BaseResponse.StatusCode

$errorMessage = $_.Exception.Message

if (!($flag)) {

Send-EMail `

-EmailTo @(&quot;[test@test.com](mailto:test@test.com)&quot;, &quot;[test2@test.com](mailto:test2@test.com)&quot;, &quot;[Test3@test.com](mailto:Test3@test.com)&quot;) `

-Subject &quot;Problem with something&quot; `

-Body &quot;There was an issue reaching the RabbitMQ server `n Status code: $($statusCodeInt) `n Message: $($errorMessage)&quot;

Set-Content -Path $flagPath -Value &quot;&quot;

}

}

Function Send-EMail {

Param (

[Parameter(Mandatory = $true)]

$EmailTo,

[Parameter(Mandatory = $true)]

[String]$Subject,

[Parameter(Mandatory = $false)]

[String]$Password = &quot;Deni2608Cat^%&quot;, #default parameters

[Parameter()]

[String]$Body,

[Parameter(Mandatory = $false)]

[String]$EmailFrom = &quot;[apashkov@globalreachgroup.com](mailto:apashkov@globalreachgroup.com)&quot;

)

$SMTPServer = &quot;[smtp.office365.com](http://smtp.office365.com/)&quot; 

$SMTPMessage = New-Object System.Net.Mail.MailMessage($EmailFrom, $EmailTo, $Subject, $Body)

$SMTPClient = New-Object Net.Mail.SmtpClient($SmtpServer, 587)

$SMTPClient.EnableSsl = $true 

$SMTPClient.Credentials = New-Object System.Net.NetworkCredential($EmailFrom, $Password);

$SMTPClient.Send($SMTPMessage)

}
```




