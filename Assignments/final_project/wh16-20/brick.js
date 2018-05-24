roca = (x, y) => {
    this.x = x;
    this.y = y;

    this.show = () => {
        Image(brickImg, x, y);
    }
}