var img;

function preload(){
    img = loadImage("texture.jpg")
    googles = loadImage("texture2.png")
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

            fill(81,79,56);
            square(positions[i][0]-200,positions[i][1]-200,100,100);

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
        }
    }
}
