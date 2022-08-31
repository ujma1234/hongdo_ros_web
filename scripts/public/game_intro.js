const no = document.getElementById("no");

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