#!/usr/bin/env node

/************************************************************************
 Copyright (c) 2017, Rethink Robotics
 Copyright (c) 2017, Ian McMahon

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
************************************************************************/

'use strict';
/**no
 * This example demonstrates simple sending of messages over the ROS system.
 */

// Require rosnodejs itself
const rosnodejs = require('rosnodejs');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const port = 5000;
const {exec} = require("child_process");
// Requrotires the std_msgs message package


rosnodejs.initNode('/web_main_node')
const nh = rosnodejs.nh;

function talker() {
  const client = nh.serviceClient('/play_song', 'hongdo_ros_speak/PlaySong');
  client.call({sequence : 1})
}

function opnecv_capture() {
  const client = nh.serviceClient('/capture', 'std_srvs/Trigger');
  client.call()
}

function handshake_service() {
  const client = nh.serviceClient('/capture', 'std_srvs/Trigger');
  client.call()
}

function url_service(urlstring) {
  const client = nh.serviceClient('/capture', 'hongdo_ros/Url');
  client.call({url : urlstring})
}





if (require.main === module) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
  })
  app.listen(port, ()=>{
    console.log(`The express`);
  })

  app.get('/intro.html', (req,res) =>{
    res.sendFile(__dirname+'/intro.html');
    console.log(__dirname)
  })


  app.get('/index.html', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
  })


  app.get('/upload.html', (req,res) =>{
    talker();

    // delete saved image
    exec(`cd /home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_web/scripts/public/img/uploads && rm -f model.jpg && rm -f hi.png`,async(err, stdout, stderr) => {
      if(err) console.error(err)
      console.log(stdout)
    })

    res.sendFile(__dirname+'/upload.html');
  })

  app.get('/taking_pic.html', (req,res) =>{
    res.sendFile(__dirname+'/taking_pic.html');
    opnecv_capture();
    //사진 저장 후 경로 public/img/uploads  파일명 : model.jpg 
  })


  app.get('/select_pic.html', (req,res) =>{
    res.sendFile(__dirname+'/select_pic.html');
    
  })


  app.get('/loading.html', (req,res) =>{
    // handshake_service();
    // drawing motion 
    exec(`cd /home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_web/scripts/public/img/uploads && python3 vision.py`,async(err, stdout, stderr) => {
      if(err) console.error(err)
      console.log(stdout)
    })

    res.sendFile(__dirname+'/loading.html');
  })


  app.get('/drawn.html', (req,res) =>{
    let readFile = fs.readFileSync('/home/jeonghan/catkin_ws/src/hongdo_ros/hongdo_ros_web/scripts/public/img/uploads/hi.png');
    let encode = Buffer.from(readFile).toString('base64');
    exec(`curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=e4422a3845100fe670775736ffd0e7cb" --form "image=${encode}"`, async (err, stdout, stderr) => {
        if (err) console.error(err)
        const arr = stdout.split('"');
        url_sesrvice(arr[17]);
        console.log(arr[17]);

    })
    res.sendFile(__dirname+'/drawn.html');
  })


  app.get('/game_intro.html', (req,res) =>{
    res.sendFile(__dirname+'/game_intro.html');
  })


  app.get('/game.html', (req,res) =>{
    res.sendFile(__dirname+'/game.html');
  })


  app.get('/finish.html', (req,res) =>{
    res.sendFile(__dirname+'/finish.html');
  })
  
  
  // Invoke Main Talker Function
  
}
