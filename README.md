# csv-transformer

A sample application in Javascript on NodeJS for trasforming provider CSV and changing it standard CSV format.

This application uses the `node` container obtained from the [Docker Hub](https://hub.docker.com/_/node/)

## Setup
Clone this repo and cd into the directory:

```
git clone https://github.com/neha0912/csv-transformer.git
cd csv-transformer
```

## Running
You can run the sample app in a couple of different ways. The first is to simply launch the executable:
```
node app.js
```

Now point your browser at `http://localhost:8080/transform?fileName=provider1.csv` to see:
```
{"message": "provider1.csv has been trasformed successfully."}
```