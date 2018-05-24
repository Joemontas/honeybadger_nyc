const brickImg;
let brick;


preload = () => {
    brickImg = loadImage('images/brick.bmp');
}

setup = () => {
    createCanvas(600, 600);
    brick = newBrick(200, 300)
}

draw = () => {
    brick.show();
}

