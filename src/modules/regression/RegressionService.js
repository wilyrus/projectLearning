
import * as ml from 'ml-regression';
import data from '../../resources/Advertising.csv';

export default class RegressionService {
    constructor() {
        this.X = []; // Input
        this.y = []; // Output
        this.regressionModel = {};
    }

    predictOutput() {
        console.log(this.regressionModel.predict(parseFloat(5)));
    }

    performRegression() {
        this.regressionModel = new ml.SLR(this.X, this.y); // Train the model on training data
        console.log(this.regressionModel.toString(3));

        return this.regressionModel.toString(3);
    }

    dressData(jsonData) {
        jsonData.forEach((row) => {
            this.X.push(parseFloat(row.Radio));
            this.y.push(parseFloat(row.Sales));
        });
    }

    doRegression() {
        this.dressData(data);
        return this.performRegression();
    }
}
