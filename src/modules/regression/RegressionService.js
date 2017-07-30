
import * as ml from 'ml-regression';
import * as drawService from './modules/draw/D3DrawService'
import data from './resources/advertising.csv';

const SLR = ml.SLR;
const X = []; // Input
const y = []; // Output
let regressionModel;

function dressData(jsonData) {
    jsonData.forEach((row) => {
        X.push(f(row.Radio));
        y.push(f(row.Sales));
    });
}
function f(s) {
    return parseFloat(s);
}
function predictOutput() {
    console.log(regressionModel.predict(parseFloat(5)));
};

function performRegression() {
    regressionModel = new SLR(X, y); // Train the model on training data
    console.log(regressionModel.toString(3));
    predictOutput(5);
}

dressData(data);
performRegression();

drawService.drawScatterplotAt(data, null);