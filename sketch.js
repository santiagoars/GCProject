var img;
let zAngle = 0;
let yAngle = 0;
let text;
let song;
function preload(){
    img = loadImage("texture.jpg")
    googles = loadImage("texture2.png")
    gun = loadModel("assets/deagle.obj")
    sword = loadModel("assets/sword.obj");
    text = loadImage("assets/tex/blue.jpg")
    light = loadImage("assets/tex/light.jpg")
}

function setup() {
    var videoInput = createCapture(VIDEO);
    videoInput.size(displayWidth, displayHeight);
    var cnv = createCanvas(displayWidth, displayHeight, WEBGL);
    cnv.position(0, 0, 1);
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(videoInput.elt);
    noStroke();
}

function draw() {

    clear();
    push();
    translate(400,50);
    texture(text);
    scale(0.8);
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
    pop();

    push()
    translate(-250, 0)
    texture(light)
    scale(25)
    rotateY(1.8);
    model(gun)
    pop()

    

    var positions = ctracker.getCurrentPosition();
    for (var i=0; i<positions.length; i++) {
        if (i == 66) {
            texture(img)
            translate(-500,-430);
            //TOP PART
            beginShape(TESS)
            vertex(positions[i][0], positions[i][1]);
            vertex(positions[i][0]-25, positions[i][1]-100);
            vertex(positions[i][0]-50, positions[i][1]-150);
            vertex(positions[i][0]-100, positions[i][1]-200);
            vertex(positions[i][0]-200, positions[i][1]-200);
            vertex(positions[i][0]-250, positions[i][1]-150);
            vertex(positions[i][0]-275, positions[i][1]-100);
            vertex(positions[i][0]-300, positions[i][1]);
            vertex(positions[i][0]-275, positions[i][1]+25);
            vertex(positions[i][0]-250, positions[i][1]+25);
            vertex(positions[i][0]-250, positions[i][1]-50);
            vertex(positions[i][0]-200, positions[i][1]-100);
            vertex(positions[i][0]-100, positions[i][1]-100);
            vertex(positions[i][0]-50, positions[i][1]-50);
            vertex(positions[i][0]-50, positions[i][1]+25);
            vertex(positions[i][0]-25, positions[i][1]+25);
            vertex(positions[i][0], positions[i][1]);
            endShape(CLOSE);

            //Goggles
            texture(googles);
            beginShape(TESS)
            vertex(positions[i][0]-250, positions[i][1]+25);
            vertex(positions[i][0]-250, positions[i][1]-50);
            vertex(positions[i][0]-200, positions[i][1]-100);
            vertex(positions[i][0]-100, positions[i][1]-100);
            vertex(positions[i][0]-50, positions[i][1]-50);
            vertex(positions[i][0]-50, positions[i][1]+25);
            vertex(positions[i][0]-75, positions[i][1]+50);
            vertex(positions[i][0]-100, positions[i][1]+50);
            vertex(positions[i][0]-125, positions[i][1]+25);
            vertex(positions[i][0]-175, positions[i][1]+25);
            vertex(positions[i][0]-200, positions[i][1]+50);
            vertex(positions[i][0]-225, positions[i][1]+50);
            endShape(CLOSE)

            //Detalles Casco
            fill(56,54,39);
            beginShape(TESS);
            vertex(positions[i][0]-200, positions[i][1]-125);
            vertex(positions[i][0]-260, positions[i][1]-75);
            vertex(positions[i][0]-260, positions[i][1]-25);
            vertex(positions[i][0]-200, positions[i][1]-75);
            endShape(CLOSE);

            beginShape(TESS);
            vertex(positions[i][0]-100, positions[i][1]-125);
            vertex(positions[i][0]-100, positions[i][1]-75);
            vertex(positions[i][0]-40, positions[i][1]-25);
            vertex(positions[i][0]-40, positions[i][1]-75);
            endShape(CLOSE);

            //Bottom
            beginShape(TESS);
            vertex(positions[i][0]-300, positions[i][1]);
            vertex(positions[i][0]-275, positions[i][1]+25);
            vertex(positions[i][0]-250, positions[i][1]+25);
            vertex(positions[i][0]-225, positions[i][1]+50);
            vertex(positions[i][0]-200, positions[i][1]+50);
            vertex(positions[i][0]-175, positions[i][1]+25);
            vertex(positions[i][0]-125, positions[i][1]+25);
            vertex(positions[i][0]-100, positions[i][1]+50);
            vertex(positions[i][0]-75, positions[i][1]+50);
            vertex(positions[i][0]-50, positions[i][1]+25);
            vertex(positions[i][0]-50, positions[i][1]+25);
            vertex(positions[i][0]-25, positions[i][1]+25);
            vertex(positions[i][0], positions[i][1]);
            vertex(positions[i][0], positions[i][1]+100);
            vertex(positions[i][0]-25, positions[i][1]+150);
            vertex(positions[i][0]-100, positions[i][1]+225);
            vertex(positions[i][0]-125, positions[i][1]+200);
            vertex(positions[i][0]-175, positions[i][1]+200);
            vertex(positions[i][0]-200, positions[i][1]+225);
            vertex(positions[i][0]-275, positions[i][1]+150);
            vertex(positions[i][0]-300, positions[i][1]+100);
            endShape(CLOSE);

            //Detalle Casco superior
            fill(81,79,56);
            square(positions[i][0]-200,positions[i][1]-200,100,100);

            beginShape(TESS);
            vertex(positions[i][0]-100, positions[i][1]+175);
            vertex(positions[i][0]-125, positions[i][1]+200);
            vertex(positions[i][0]-175, positions[i][1]+200);
            vertex(positions[i][0]-200, positions[i][1]+175);
            vertex(positions[i][0]-200, positions[i][1]+50);
            vertex(positions[i][0]-175, positions[i][1]+25);
            vertex(positions[i][0]-125, positions[i][1]+25);
            vertex(positions[i][0]-100, positions[i][1]+50);            
            endShape(CLOSE);
        }
    }
    
}