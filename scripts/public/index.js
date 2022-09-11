<<<<<<< Updated upstream
let _video = document.getElementById("index_video");
var intro_voice = new Audio("audio/speech/1.mp3")
_video.load();
_video.play();
_video.playbackRate = 1;


setTimeout(()=>{
    intro_voice.play();
},4800);

setTimeout(()=>{
    _video.playbackRate = 0.65;
    _video.pause();
},5100);

setTimeout(()=>{
    _video.play();
},6000);
=======
var hello1 = new Audio("audio/speech/hello1.mp3");
var hello2 = new Audio("audio/speech/hello2.mp3");


hello1.play();
hello2.play();
hello1.muted = true;

setTimeout(()=>{
    hello1.muted=false;
},1500);
const timeout_ = setTimeout(()=>{
    document.getElementById("hong2").className = "hong2";
},4000)



const timeout = setTimeout(()=>{
    document.getElementById("text1").className = "off_text1";
    document.getElementById("text2").className = "off_text2";
    document.getElementById("text3").className = "off_text3";
},12000)

const timeout1 = setTimeout(()=> {
    document.getElementById("text4").className = "off_text4";
}, 14000)

const timeout2 = setTimeout(()=> {
    document.getElementById("box1").className = "no_box";
    document.getElementById("box2").className = "yes_box";
}, 16000)

const fromLeftButton = document.getElementById("box1");
const fromTopButton = document.getElementById("box2");

fromLeftButton.addEventListener("click", e=>{
    document.getElementById("ct1").className = "container1_no";
    document.getElementById("ct2").className = "container2_no";
    document.getElementById("ct3").className = "container3_no";
    document.getElementById("ct4").className = "container4_no";
    document.getElementById("ct5").className = "container5_no";
    document.getElementById("ct6").className = "container6_no";

    const timeout = setTimeout(()=>{
        location.replace("upload.html");
    }, 2500);
});
fromTopButton.addEventListener("click", e=>{
    document.getElementById("ct1").className = "container1_yes";
    document.getElementById("ct2").className = "container2_yes";
    document.getElementById("ct3").className = "container3_yes";
    document.getElementById("ct4").className = "container4_yes";
    document.getElementById("ct5").className = "container5_yes";
    document.getElementById("ct6").className = "container6_yes";

    const timeout = setTimeout(()=>{
        location.replace("game_intro.html");
    }, 2500);
});
>>>>>>> Stashed changes

setTimeout(()=>{
    document.querySelector(".off_select_btn_box").className = "select_btn_box";
},21800);

// setTimeout(()=>{
// },8000);

const _yes = document.getElementById("YES");

const _no = document.getElementById("NO");

_yes.addEventListener("click", e=>{
    _yes.className = "yes_btn_click";

    setTimeout(()=>{
        location.replace("select_effect.html")
    },1000);
});



