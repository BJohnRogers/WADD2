let posX = 250;
let posY = 250;
let jumpHeight = -200;
let ease = 0.1;
let groundY = 400;
let gravity = 0.3;
let grounded = true;
let player;

function setup(){
    createCanvas(500, 500)
    player = new Player(200, 200, 100);
}

function draw(){

    background(100);
    fill(130, 130, 130);
    player.draw();
    
    drawGround();
    doGravity();
    checkGround();
    move();

}

function jump(){
   posY += jumpHeight;
}

function move(){

    if(keyIsDown(68)) posX+=10;
    if(keyIsDown(65)) posX-=10;

}

function drawGround(){ 
    rect(0, groundY, 500, 100);
} 

function checkGround(){
    if((posY) > groundY) grounded = true;
    else grounded = false;
}

function doGravity(){
      
    if(!grounded){
        posY += gravity * deltaTime; 
    }

}

function keyPressed(){
    if(keyCode == 32 && grounded) jump();
}




