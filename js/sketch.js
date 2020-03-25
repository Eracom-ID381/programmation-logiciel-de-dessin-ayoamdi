let mode = 0;
let triangleSize = 80;
let rectSize = 80;
let lineSize = 10;
let osc, freq, amp;
let h = 0;
let s = 0;
let b = 0;
let soundPoints;
let button;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255);
    background(132, 30, 250);
    osc = new p5.Oscillator('sine');
    soundPoints = loadSound('media/button.mp3');
    //cnv.mousePressed(penguinPoints);

    button = createButton('Vive le COVID');
    button.position(19, 19);
    button.mousePressed(buttonRect);

}

function preload() {
    soundFormats('mp3', 'ogg');
    soundPoints = loadSound('media/button.mp3');
}

function draw() {
    strokeWeight(lineSize);
    stroke(h, s, b);

    if (mouseIsPressed) {
        if (mode === 0) {
            
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (mode === 1) {
            noStroke();
            fill(255, 255, 255);
            //opacity(0.4);
            triangle(mouseX, mouseY - triangleSize, mouseX + triangleSize, mouseY + triangleSize, mouseX - triangleSize, mouseY + triangleSize);
        } else if (mode === 2) { 
            noStroke();
            fill(200, 25, 20);
            //opacity(0.4);
            rect(mouseX, mouseY, rectSize, rectSize);
        }
        osc.freq(freq, 0.1);
        osc.amp(amp, 0.1);
    }

    penguinPoints();

    freq = map(mouseX, 0, width, 100, 300);
    amp = map(mouseY, 0, height, 0, 1);

    strokeWeight(2);
    textSize(80);
    fill(15, 0, 255);
    text('HOW TO DRAW ', 1000, 70);
    text('A PENGUIN?', 1000, 140);

    textSize(30);
    text('Choisis une couleur :', 1000, 240);

    fill(40, 255, 255)
    rect(1000, 270, 35, 35);
    text('A', 1045, 305);

    fill(0, 0, 0)
    rect(1000, 315, 35, 35);
    text('W', 1045, 350);

    fill(0, 0, 255)
    rect(1000, 360, 35, 35);
    text('D', 1045, 395);

    fill(132, 30, 250)
    rect(1000, 405, 35, 35);
    text('S', 1045, 440);

    fill(15, 0, 255);
    textSize(30);
    text('Pinceau:', 1000, 490);

    fill(0, 0, 0);
    text('Augmenter la taille : E', 1000, 535);

    text('Diminuer la taille : Q', 1000, 580);

    fill(15, 0, 255);
    textSize(30);
    text('Motif:', 1000, 625);

    fill(0, 0, 0);
    text('Motif triangle', 1000, 670);

    text('Motif carré', 1000, 715);



}

function keyPressed() {

    if (key === 'w') {
        s = 0;
        b = 0;
    }

    if (key === 'a' || key === 'A') {
        h = 40;
        s = 255;
        b = 255;

    }

    if (key === 'd') {
        h = 0;
        s = 0;
        b = 255;
    }

    if (key === 's') {
        h = 132;
        s = 30;
        b = 250;
    }

    if (key === 'e') {
        lineSize = lineSize + 10;
    }

    if (key === 'q') {
        lineSize = lineSize - 10;
    }

    if (keyCode === LEFT_ARROW) { 
        mode = 0;
    }

    if (key === 'f') {
        mode = 1;
    }

    if (keyCode === RIGHT_ARROW) {
        mode = 2;  
    }
}

function mousePressed() {
    osc.start();


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function mouseReleased() {
    osc.stop();

}

function penguinPoints() {



    strokeWeight(8);
    stroke(15, 0, 0);

    //contour du penguin//
    point(377, 128);
    point(410, 114);
    point(460, 117);
    point(513, 112);
    point(550, 115);
    point(585, 140);
    point(610, 170);
    point(637, 220);
    point(665, 265);
    point(687, 330);
    point(690, 373);
    point(700, 420);
    point(705, 460);
    point(700, 520);
    point(698, 570);
    point(695, 605);
    point(685, 655);
    point(675, 700);
    point(660, 740);
    point(640, 760);
    point(640, 790);
    point(655, 818);
    point(630, 818);
    point(630, 818);
    point(615, 816);
    point(580, 816);
    point(540, 814);
    point(510, 816);
    point(480, 816);
    point(445, 813);
    point(454, 795);
    point(463, 793);
    point(460, 760);
    point(445, 730);
    point(425, 680);
    point(410, 620);
    point(390, 650);
    point(370, 615);
    point(375, 560);
    point(380, 510);
    point(395, 445);
    point(400, 400);
    point(410, 350);
    point(425, 300);
    point(445, 250);
    point(490, 200);
    point(465, 165);
    point(440, 140);
    point(415, 130);

    //points à l'intérieur du penguin//
    point(405, 485);
    point(400, 540);
    point(405, 585);
    point(690, 475);
    point(675, 530);
    point(670, 580);
    point(665, 630);
    point(630, 580);
    point(625, 520);
    point(630, 460);
    point(650, 395);

    //texte//
    strokeWeight(1);
    textSize(8);
    fill(15, 0, 100);
    text('1', 383, 134);

}

function buttonRect() {
    mode = 4;
    fill(0);
    rect(width / 2, height / 2, 500, 500);
    soundPoints.play();
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}