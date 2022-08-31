const timeout1 = setTimeout(()=> {
    document.getElementById("hong2_box").className = "hong2";
}, 2500)

    

const timeout3 = setTimeout(()=> {
    document.getElementById("camera_box").className = "btn";

    document.getElementById("txt1").className = "text"
}, 4500)

const btn = document.getElementById("camera_box");
btn.addEventListener("click", e=>{
    btn.className = "off_btn";
    document.getElementById("display").className = "display";
    document.getElementById("txt1").className = "off_text";
    document.getElementById("txt").className = "text";
    

    const timeout6 = setTimeout(()=> {
        document.getElementById("txt2").className = "anounce";
    }, 2000);

    const timeout4 = setTimeout(()=> {
        document.getElementById("count").className = "demo";
    }, 4000);

    setTimeout(()=>{
      myVideoStream.remove();
    },6900);

    const timeout5 = setTimeout(()=>{
        location.replace("taking_pic.html")
        
    }, 7000);
})

var myVideoStream = document.getElementById('myVideo')     // make it a global variable
  var myStoredInterval = 0

function getVideo(){
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: {
        deviceId:"ec24fa6365362930858ecd21b8f258fce23c1ab63fe6e39a8a8082ffeda769e0"
    }, 
    audio: false
},
                     
    function(stream) {
      myVideoStream.srcObject = stream   
      myVideoStream.play();
  }, 
                     
   function(error) {
     alert('webcam not working');
  });
}

// if (!navigator.mediaDevices?.enumerateDevices) {
//     console.log("enumerateDevices() not supported.");
//   } else {
//     // List cameras and microphones.
//     navigator.mediaDevices.enumerateDevices()
//       .then((devices) => {
//         devices.forEach((device) => {
//           console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
//         });
//       })
//       .catch((err) => {
//         console.error(`${err.name}: ${err.message}`);
//       });
//   }