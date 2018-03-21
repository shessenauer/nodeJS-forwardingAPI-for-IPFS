# nodeJS-forwardingAPI-for-IPFS
A dockerized Node.JS API to receive files from a frontend application and upload/download from an IPFS node


The reason for this NodeJS API is because we want the upload of user files to IPFS to happen on the server and not on the client. A lot of examples out there at the time of writing this mostly show some Vue.js or React application running an IPFS node directly. That is a huge barrier to entry for users because 99% of them will not have the technical ability to run an IPFS node and even if they do, it is intensive on computation and battery. So the other examples essentially looks like: Client <--> IPFS Node Locally. Whereas, this API does the following: Client <---> Server (API <---> IPFS). This API uses Docker for both the IPFS node and also the API which I host on a Amazon Web Services (AWS) instance.
I also use the AWS Elastic Container Registry (ECR), but you can use whatever you want.

## Upload to IPFS postman curl
```
curl -X POST \
  http://localhost:5001/api/v0/add \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F file=@/Users/$user/Desktop/description.txt
```

The output is the following:
```
{
    "Name": "description.txt",
    "Hash": "QmWaMszSWfs7gp6o3UpvwmSd1Rp9cU1TQsXMXq7sxHJRd7",
    "Size": "377"
}
```

## get from IPFS postman curl
```
curl -X GET \
  https://ipfs.io/ipfs/QmWaMszSWfs7gp6o3UpvwmSd1Rp9cU1TQsXMXq7sxHJRd7 \
  -H 'Cache-Control: no-cache' \
```

The output is the following:
```
{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 This is a description}
```

