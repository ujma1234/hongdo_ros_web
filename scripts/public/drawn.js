const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
  this.classList.toggle('active');
}

function addClass() {
  this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('click', e=>{
    const timeout = setTimeout(()=>{
        document.getElementById("real_bg").className = "real_bg";
    },5000);
    const timeout1 = setTimeout(()=>{
        document.getElementById("btn").className = "hide";
        document.getElementById("real_bg").className = "off_real_bg";
        document.getElementById("bg").className = "off_real_bg";
    },6000);
    const timeout3 = setTimeout(()=>{
        document.getElementById("box1").className = "img_box";
        document.getElementById("box2").className = "QR_box";
        document.getElementById("txt1").className = "announce";
        document.getElementById("txt2").className = "text";
    },7000);
});

button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);

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