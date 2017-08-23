
import Vue from 'vue';

import button from './modules/components/ButtonController';
import SvgContainer from './modules/components/SvgContainer';

import RegressionService from './modules/regression/RegressionService';
import SpeechRecognitionService from './modules/speechRecognition/SpeechRecognitionService';
import DrawService from './modules/draw/D3DrawService';
import GraphHelper from './modules/utils/GraphHelper';

export default class Application {
    start() {
        new Vue({
            el: '#app',

            data: {
                regressionFunc: null
            },

            components: {
                'my-button': button,
                'svg-container': SvgContainer
            },

            beforeCreate() {
                if (!this.SpeechRecognitionService) {
                    this.SpeechRecognitionService = new SpeechRecognitionService();
                }
                if (!this.RegressionService) {
                    this.RegressionService = new RegressionService();
                }
                if (!this.DrawService) {
                    this.DrawService = new DrawService();
                }
            },

            methods: {
                startDict() {
                    this.SpeechRecognitionService.startRecognition();
                },
                endDict() {
                    this.SpeechRecognitionService.stopRecognition();
                },
                startRegression() {
                    this.regressionFunc = this.RegressionService.doRegression();
                },
                drawRegressionData() {
                    const regressionData = GraphHelper.getPointsFromFunc(this.regressionFunc, {min: 0, max: 50}, 10);

                    this.DrawService.drawScatterplotAt(regressionData);
                }
            }
        })
    }
}

