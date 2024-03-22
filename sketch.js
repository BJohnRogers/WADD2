let posX = 250;
let posY = 250;
let groundY = 400;
let tempPosY;
let gravity = 1;
let grounded = true;

function setup(){
createCanvas(500, 500)
}

function draw(){

    background(100);
    fill(130, 130, 130);
    circle(posX, posY, 100);
    
    drawGround();
    doGravity();
    checkGround();
    move();
    console.log("no");

}

function jump(){

    if(grounded) if(keyIsDown(32)) posY -= 50;
    

}

function move(){

    if(keyIsDown(68)) posX+=10;
    if(keyIsDown(65)) posX-=10;

}

function drawGround(){ 
    rect(0, groundY, 500, 100);
} 

function checkGround(){
    if((posY) = groundY) grounded = true;
    else grounded = false;
}

function doGravity(){
      
    if(!grounded){
        posY += gravity * deltaTime; 
    }

}