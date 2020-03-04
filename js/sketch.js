function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    strokeWeight(8);
    stroke("yellow");

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

}

function mousePressed() {
    strokeWeight(30);
    stroke(247, 243, 22);
    line(mouseX, mouseY, mouseX, mouseY);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}