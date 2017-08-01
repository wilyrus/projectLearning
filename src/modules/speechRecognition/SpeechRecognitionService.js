

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

const STTController = new SpeechRecognition();

STTController.lang = 'en-US';
STTController.interimResults = false;
STTController.maxAlternatives = 1;

//STTController.start();
/*
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var color = event.results[last][0].transcript;
    diagnostic.textContent = 'Result received: ' + color + '.';
    bg.style.backgroundColor = color;
    console.log('Confidence: ' + event.results[0][0].confidence);
}
*/

/*
recognition.onspeechend = function() {
    recognition.stop();
}
*/