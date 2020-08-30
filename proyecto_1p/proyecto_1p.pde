import processing.video.*;

Capture pantalla;

void settings(){
  size(600,600);
  pantalla = new Capture(this, 640, 480, 30);
  pantalla.start();
}

void draw(){
  pantalla.read();
  background(0);
  tint(255, mouseY, mouseY);
  image(pantalla, 0,0, mouseX, mouseY);
}
