const msg = new SpeechSynthesisUtterance();
let voices = []
const dropdown = document.querySelector('[name=voice]')
const options = document.querySelectorAll('[type=range],[name=text]')
const speakbtn = document.getElementById("speak")
const stopbtn = document.getElementById('stop')

speechSynthesis.addEventListener('voiceschanged',function populated() {
    voices = this.getVoices();
    dropdown.innerHTML += voices.map(voice => `<option value="${voice.name}">${voice.name},${voice.lang}</option>`).join('')
    
})


function setvoice(){
  const input = document.querySelector('[name=text]')
  msg.text = input.value   
  msg.voice = voices.find(voice => voice.name === this.value)
  
}


function toggle(startover = true){
  
  speechSynthesis.cancel();
  if(startover){
  speechSynthesis.speak(msg)}
}

dropdown.addEventListener('change', setvoice)

function setoptions(){
  msg[this.name] = this.value

}

options.forEach(option => option.addEventListener('change' , setoptions))

speakbtn.addEventListener('click' , toggle)
stopbtn.addEventListener('click', function suar(){
  toggle(false)
})