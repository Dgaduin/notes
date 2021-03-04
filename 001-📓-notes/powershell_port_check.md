# Port check
#tech/language/powershell 

A quick one-liner to test a specific port on a specific IP:

```shell
Test-NetConnection -ComputerName "IP" -Port PortValue
```