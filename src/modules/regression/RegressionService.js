
import * as ml from 'ml-regression';
import data from '../../resources/Advertising.csv';

export default class RegressionService {
    constructor() {
        this.X = [];
        this.y = [];
        this.regressionModel = {};
    }

    predictOutput() {
        console.log(this.regressionModel.predict(parseFloat(5)));
    }

    performRegression() {
        this.regressionModel = new ml.SLR(this.X, this.y);

        return this.regressionModel.predict.bind(this.regressionModel);
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
