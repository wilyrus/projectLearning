
export default class SpeechRecognitionService {
    constructor() {
        const browserSpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!this.STTController) {
            this.STTController = new browserSpeechRecognition();

            this.STTController.lang = 'en-US';
            this.STTController.interimResults = false;
            this.STTController.maxAlternatives = 1;

            this._initEventsListener();
        }
    }

    startRecognition() {
        this.STTController.start();
    }

    stopRecognition() {
        this.STTController.stop();
    }

    _initEventsListener() {
        this.STTController.onresult = function(event) {
            console.log('Confidence: ' + event.results[0][0].confidence);
        }

        this.STTController.onspeechend = function() {
            this.STTController.stop();
        }
    }
}
