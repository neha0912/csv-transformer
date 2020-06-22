
const fastcsv = require('fast-csv');
const fs = require('fs');
const config = require('../models/configuration');

const data = [];
let counter = 1;

exports.transform = (req, res) => {
    const fileName = req.query && req.query.fileName;
  
    if(!fileName) {
        res.send({message: "Please provide provider file name."})
    }

    fs.createReadStream(fileName)
        .on('error', err =>{
            res.send({message: err})
        })
        .pipe(fastcsv.parse({headers: true}))
        .on('data', (row) => {
            const {VIN, Make, Model, Mileage, Year, Price, "Zip Code": zip} = config.createNewRowFormat(row);
        
            const rowData = {
                UUID: counter,
                VIN,
                Make,
                Model,
                Mileage,
                Year,
                Price,
                "Zip Code": zip,
                "Create Date": new Date(),
                "Update Date": new Date()        
            }

            data.push(rowData);

            counter++;
        })
        .on('end', () => {
            const ws = fs.createWriteStream("out.csv");
            fastcsv
                .write(data, { headers: true })
                .pipe(ws);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({message: `${fileName} has been trasformed successfully.`}));
            res.end();
        });
};
