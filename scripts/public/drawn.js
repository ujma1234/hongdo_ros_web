const timeout = setTimeout(()=>{
    document.getElementById("real_bg").className = "real_bg";
},100);
const timeout1 = setTimeout(()=>{
    document.getElementById("real_bg").className = "off_real_bg";
    document.getElementById("bg").className = "off_real_bg";
},1100);
const timeout3 = setTimeout(()=>{
    document.getElementById("box1").className = "img_box";
    document.getElementById("box2").className = "QR_box";
    document.getElementById("txt1").className = "announce";
    document.getElementById("txt2").className = "text";
},1200);


const next  = document.getElementById("txt2");
next.addEventListener("click", e=>{
    document.getElementById("txt2").className = "bye_txt";

    const timeout3 = setTimeout(()=>{
        document.getElementById("bg").className = "bye_bg";
    },1000);
    const timeout4 = setTimeout(()=>{
        location.replace("game_intro.html");
    },3000);
});



const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});

