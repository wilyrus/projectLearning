import Vue from 'vue';
import button from './modules/components/ButtonController';
import SpeechRecognitionService from './modules/speechRecognition/SpeechRecognitionService';

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
