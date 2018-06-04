let angle = 0;

function setup() {
    createCanvas(600, 400);
    bubble1X = random(0, width);
    bubble1Y = random(0, height);
}

function draw() {
    document.body.style.backgroundImage = "url('image.jpg')"


    push();

    translate(width / 2, height / 2);

    rotate(angle/4)
    angle++

    fill("blue")
    arc(0, 0, 160, 160, 0, PI );

    fill("yellow")
    arc(0, 0, 160, 160, PI , 2*PI);
    pop();

}

