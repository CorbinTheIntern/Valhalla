var player = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 5;
    this.inputs = {
        up: false,
        down: false,
        left: false,
        right: false
    }
}