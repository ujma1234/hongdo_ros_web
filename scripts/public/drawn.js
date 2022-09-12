var duru_audio = new Audio('audio/effect/duru.mp3');
duru_audio.muted= true;

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});

const btn_next = document.getElementById("next_btn");

btn_next.addEventListener("click", e=>{
    location.replace("intro.html");
});