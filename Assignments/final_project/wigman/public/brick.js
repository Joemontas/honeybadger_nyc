function brick(x,y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        image(brick.png,x,y)
    }

}