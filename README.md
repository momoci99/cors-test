# CORS-TEST

Simple cors test with node & cors lib

# Before run project

## 1. Please run blow script for create ssl pem file

> openssl genrsa 1024 > key.pem

> openssl req -x509 -new -key key.pem > cert.pem

## 2. Update your ip in .env.server

```
PORT=8080

# update your local ip
IP=your ip
```

# How to test

> yarn start_web

> yarn start_backend

> go to https://localhost:8081
