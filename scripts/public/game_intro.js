

var voice5_audio = new Audio('audio/speech/5.mp3');
voice5_audio.muted = true;
const no = document.getElementById("no");

setTimeout(()=>{
    voice5_audio.play();
    voice5_audio.muted=false;
},2500);

setTimeout(()=>{

},17500);





const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});