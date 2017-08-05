
import Vue from 'vue';
import button from './modules/components/ButtonController';
import SpeechRecognitionService from './modules/speechRecognition/SpeechRecognitionService';

export default class Application {
    constructor() {
        if (!this.SpeechRecognitionService) {
            this.SpeechRecognitionService = new SpeechRecognitionService();
        }
    }

    start() {
        new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            },
            components: {
                'my-button': button
            },
            methods: {
                startDict() {
                    this.SpeechRecognitionService.startRecognition();
                },
                endDict() {
                    this.SpeechRecognitionService.stopRecognition();
                }
            }
        })
    }
}
