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


timeout;

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
