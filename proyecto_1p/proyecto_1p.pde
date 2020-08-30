import processing.video.*;

Capture pantalla;

void setup(){
  size(640,480);
  String[] cameras = Capture.list();
  
  if (cameras.length == 0) {
    println("There are no cameras available for capture.");
    exit();
  } else {
    println("Available cameras:");
    for (int i = 0; i < cameras.length; i++) {
      println(cameras[i]);
    }
    
    // The camera can be initialized directly using an 
    // element from the array returned by list():
    pantalla = new Capture(this, cameras[0]);
    pantalla.start();     
  }      
}

void draw(){
  if (pantalla.available() == true) {
    pantalla.read();
  }
}
