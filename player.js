class Player extends HitBox{

    constructor(x, y, size){
        super(x, y, size);
    }


    draw(){
        circle(x, y, size);
    }

}