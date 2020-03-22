let triangleSize = 80;
let osc, freq, amp;
let h = 0;
let s = 0;
let b = 0;
let soundPoints;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255);
    background(175, 9, 100);
    osc = new p5.Oscillator('sine');
    soundPoints = loadSound('media/button.mp3', penguinPoints);

}

function draw() {
    strokeWeight(10);
    stroke(h, s, b);

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        osc.freq(freq, 0.1);
        osc.amp(amp, 0.1);

    }

    penguinPoints();

    freq = map(mouseX, 0, width, 100, 1000);
    amp = map(mouseY, 0, height, 0, 1);


}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        s = 0;
        b = 0;
    }

    if (keyCode === RIGHT_ARROW) {
        h = 40;
        s = 255;
        b = 255;

    }

    if (keyCode === UP_ARROW) {
        h = 0;
        s = 0;
        b = 255;
    }

    if (keyCode === BACKSPACE) {
        h = 232;
        s = 254;
        b = 252;
    }

    if (keyCode === "W") {
        strokeWeight = strokeWeight + 8;
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

    //soundPoints.play();

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







//if (keyCode === DOWN_ARROW && mousePressed) {
//    noStroke();
//    fill(173, 17, 100);
//    opacity(0.4);
//    line(mouseX, mouseY, pmouseX, pmouseY) = triangle(mouseX, mouseY - triangleSize, mouseX + triangleSize, mouseY + triangleSize, mouseX - triangleSize, mouseY + triangleSize);
//}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}