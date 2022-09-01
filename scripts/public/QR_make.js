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
        location.replace("drawn.html");
    },5000);
});

button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);




const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});

