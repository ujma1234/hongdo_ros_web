



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

if (!navigator.mediaDevices?.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  } else {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
        });
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }

  const btn_home = document.getElementById("btn_home");

var go_home = 0;

btn_home.addEventListener("click",e=>{
    go_home++;
    if(go_home >= 5) {
        location.replace("intro.html");
    }
});
