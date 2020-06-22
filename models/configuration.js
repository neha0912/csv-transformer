const _ =require('lodash')

const CONFIG = {
    "VIN": ["vin"],
    "Make": ["make"],
    "Model": ["model name", "model"],
    "Mileage": ["mileage"],
    "Year": ["model year", "year"],
    "Price": ["sale price", "price"],
    "Zip Code": ["zip", "postal code"],
}

function getConfigMapping(value) {
    for(let prop in CONFIG) {
        if(_.indexOf(CONFIG[prop], value) !== -1) {
            return prop;
        }
    }
}

exports.createNewRowFormat = row => {
    let obj = {};
    for(let attr in row) {
        let key = getConfigMapping(attr.toLowerCase());
        if(!!key) {
            obj[key] = row[attr];
        }
    }

    return obj
}

