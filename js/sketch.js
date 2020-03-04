function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
    //    stroke(50, 178, 223);
    //line(mouseX, mouseY, mouseX, mouseY);

    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

}

function mousePressed() {
    strokeWeight(50);
    stroke(247, 243, 22);
    line(mouseX, mouseY, mouseX, mouseY);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}