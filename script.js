let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select"); // Replace with the correct selector for the 'select' element.

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // Corrected method name.
    speech.voice = voices[0];

    voices.forEach((voice, i) => (
        voiceSelect.options[i] = new Option(voice.name, i)
    ));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
