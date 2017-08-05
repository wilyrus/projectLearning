
export default class SpeechRecognitionService {
    SpeechRecognition() { return SpeechRecognition || webkitSpeechRecognition }

    constructor() {
        if (!this.STTController) {
            this.STTController = new SpeechRecognition();

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
