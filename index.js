
import test from './modules/importTest1.js';

test();

/*
import ml from 'ml-regression';
import csv from 'csvtojson';

const csvFilePath = './resources/advertising.csv';

const csvData = []; // parsed Data
const X = []; // Input
const y = []; // Output
let regressionModel;

function dressData() {
    csvData.forEach((row) => {
        X.push(f(row.Radio));
        y.push(f(row.Sales));
    });
}
function f(s) {
    return parseFloat(s);
}

function performRegression() {
    regressionModel = new SLR(X, y); // Train the model on training data
    console.log(regressionModel.toString(3));
    predictOutput();
}


csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData(); // To get data points from JSON Objects
        performRegression();
    });
*/