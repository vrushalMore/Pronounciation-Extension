document.getElementById('speak').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});