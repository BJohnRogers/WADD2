class HitBox{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    isHit(other){
        if(
            this.x + (this.size/2) >= other.x &&
            this.x <= other.x + (other.size/2) &&
            this.y + (this.size/2) >= other.y &&
            this.y <= other.y + (other.size/2)
        ) return true;
        else return false;
    }
}