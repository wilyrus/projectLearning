
import Vue from 'vue';
import button from './modules/components/ButtonController';
import RegressionService from './modules/regression/RegressionService';
import SpeechRecognitionService from './modules/speechRecognition/SpeechRecognitionService';
import * as DrawService from './modules/draw/D3DrawService'

export default class Application {
    start() {
        new Vue({
            el: '#app',
            components: {
                'my-button': button
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
                    this.RegressionService.doRegression();
                },
                drawRegressionData() {
                    this.DrawService.drawScatterplotAt(data, null);
                }
            }
        })
    }
}

