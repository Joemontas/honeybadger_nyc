const brickImg;
const brick;

function preload() {
    brickImg = loadImage("images/brick.png");
}

function setup() {
    createCanvas(600,600)
    brick = new Brick(200,300);
}

function draw() {
    background(0);
    brick.show();
}