---
title: OpenSSL
---

# OpenSSL

```shell
openssl genrsa 2048 > domain.key

openssl req -newkey rsa:2048 -nodes -keyout domain.key

openssl req -newkey rsa:2048 -nodes -keyout domain.key -out domain.csr

openssl req -text -noout -verify -in domain.csr

openssl req -key domain.key -new -x509 -days 365 -out domain.crt

openssl pkcs12 -export -in domain.crt -inkey domain.key -out domain.pfx -certfile  domain.crt
```

> MSYSGIT

Nope. MSYSGIT is almost certainly *not* what you think it is. What you refer to is *Git for Windows*.

> `docker run -ti --rm -v "/c/Users/igor/Documents/Mikogo4:/app" buildpack-deps:jessie bash`
> 
> bash thinks I used paths in Unix format

From the [release notes' known issues](https://github.com/git-for-windows/build-extra/blob/master/installer/ReleaseNotes.md#known-issues):

> - If you specify command-line options starting with a slash, POSIX-to-Windows path conversion will kick in converting e.g. "`/usr/bin/bash.exe`" to "`C:\Program Files\Git\usr\bin\bash.exe`". When that is not desired -- e.g. "`--upload-pack=/opt/git/bin/git-upload-pack`" or "`-L/regex/`" -- you need to set the environment variable `MSYS_NO_PATHCONV` temporarily, like so:
> 
> > `MSYS_NO_PATHCONV=1 git blame -L/pathconv/ msys2_path_conv.cc`
> 
> Alternatively, you can double the first slash to avoid POSIX-to-Windows path conversion.w
