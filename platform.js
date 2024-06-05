class Platform{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(){
        rect(x, y, w, h);
    }

}