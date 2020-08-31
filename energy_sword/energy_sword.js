
let zAngle = 0;
let yAngle = 0;
let isPressed = false;
function preload(){
  sword = loadModel('assets/sword.obj');
}

function setup() {
   createCanvas(640, 480, WEBGL);
}


function draw() {
  background(200); 
  scale(0.4);
  if(keyIsPressed){
    if (key === "a") {
      zAngle -= 0.05;
    }else if(key === "d"){
      zAngle += 0.05;
    }else if(key === "w"){
      yAngle += 0.05;
    }else if(key === "s"){
      yAngle -= 0.05;
    }
  }
  rotateZ(zAngle);
  rotateY(yAngle);
  model(sword);
}

function keyPressed() {

}
