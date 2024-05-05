class Player extends HitBox{

    constructor(x, y, size){
        super(x, y, size);
    }

    draw(x, y, size){
        circle(x, y, size);
    }

}