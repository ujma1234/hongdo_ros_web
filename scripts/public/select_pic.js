const btn_yes = document.getElementById("btn-yes");

const btn_no = document.getElementById("btn-no");

btn_yes.addEventListener("click", e=>{
    document.getElementById("ct1").className = "container1_yes";
    document.getElementById("ct2").className = "container2_yes";
    document.getElementById("ct3").className = "container3_yes";
    document.getElementById("ct4").className = "container4_yes";
    document.getElementById("ct5").className = "container5_yes";
    document.getElementById("ct6").className = "container6_yes";

    const timeout = setTimeout(()=>{
        location.replace("loading.html");
    }, 2500);
});

btn_no.addEventListener("click", e=>{
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