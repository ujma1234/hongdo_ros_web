

var voice5_audio = new Audio('audio/speech/5.mp3');
voice5_audio.muted = true;
const no = document.getElementById("no");

voice5_audio.play();
voice5_audio.muted=false;


no.addEventListener("click", e=>{
    document.getElementById("wrn").className =
    "warning";
});

const wno = document.getElementById("wno");

wno.addEventListener("click", e=>{
    document.getElementById("wrn").className = "offing_warning";

    const timeout = setTimeout(()=>{
        document.getElementById("wrn").className = "off_warning";
    },1500);
});

const yes = document.getElementById("yes");

yes.addEventListener("click", e=>{
    document.querySelector(".off_container").className = "container";

    setTimeout(()=>{
        location.replace("game.html");
    },2000);
    
});

const wyes = document.getElementById("wyes");

wyes.addEventListener("click", e=>{
    document.querySelector(".off_container").className = "container";

    setTimeout(()=>{
        location.replace("finish.html");
    },2000);

});

const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});