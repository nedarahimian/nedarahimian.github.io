let angle = 0;
let rotatespeed = 1;
let slowdown = 0;
let bubbles = []

function setup() {
    createCanvas(displayWidth, 400);
    bubble1X = random(0, width);
    bubble1Y = random(0, height);

}

function draw() {
    document.body.style.backgroundImage = "url('image.jpg')"

    fill("green")
    triangle(760, 40, 730, 80, 790, 70);

    push();

    translate(width / 2, height / 2);

    rotate(angle/4)
    angle += rotatespeed
    rotatespeed -= slowdown

    if (rotatespeed < 0.01) {
        slowdown = 0;
        rotatespeed = 0;
        createbubbles()

    }



   fill("purple")
    arc(0, 0, 300, 300, 0, PI/2 );

     fill("blue")
    arc(0, 0, 300, 300, PI/2, PI );

    fill("yellow")
    arc(0, 0, 300, 300, PI, 3*PI/2);

    fill("pink")
    arc(0, 0, 300, 300, 3*PI/2, 2*PI);
    pop();




}

function mouseClicked() {
    slowdown = .01;
}

function createbubbles(){


}