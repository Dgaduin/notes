# OpenSSL
#tech/tools/openssl

OpenSSL is a general purpose crypto toolchain, with a focus on TSL and SSL.


Simple example for generating a domain `crt` file:
```shell
openssl genrsa 2048 > domain.key

openssl req -newkey rsa:2048 -nodes -keyout domain.key

openssl req -newkey rsa:2048 -nodes -keyout domain.key -out domain.csr

openssl req -text -noout -verify -in domain.csr

openssl req -key domain.key -new -x509 -days 365 -out domain.crt

openssl pkcs12 -export -in domain.crt -inkey domain.key -out domain.pfx -certfile  domain.crt
```
