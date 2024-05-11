const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll("[type='range'], [name='text']");
const speakBtn = document.querySelector("#speak");
const stopBtn = document.querySelector("#stop");

msg.text = document.querySelector("[name='text']").value;
function populateVoices() {
    voices = this.getVoices();
    voiceDropdown.innerHTML = voices.filter(voice => voice.lang.includes("en"))
        .map(voice =>
            `<option value="${voice.name}">${voice.name}</option>`
        ).join("");
}
speechSynthesis.addEventListener("voiceschanged", populateVoices);

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}
function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}
voiceDropdown.addEventListener("change", setVoice);

function setOption() {
    console.log(msg);
    msg[this.name] = this.value;
    toggle();
}
options.forEach(option => option.addEventListener("change", setOption));

speakBtn.addEventListener("click", toggle);
// stopBtn.addEventListener("click", toggle.bind(null, false));
stopBtn.addEventListener("click", () => toggle(false));