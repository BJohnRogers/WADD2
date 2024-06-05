let posX = 250;
let posY = 250;
let jumpHeight = -10;
let ease = 0.1;
let groundY = 400;
let gravity = 0.3;
let grounded = true;
let player;
let platformOne;
let moveSpeed;

function setup(){
    var theCanvas = createCanvas(500, 500);
    theCanvas.parent('#game');
    player = new Player();
    platformOne = new Platform(20, 340, 100, 10);
}

function draw(){

    background(100);
    fill(130, 130, 130);

    score();
    player.draw(posX, posY, 20);
    platformOne.draw();
    handleGround();
    
    doGravity();
    move();
    

}

function jump(){
    // Jump function
    if(keyIsDown(UP_ARROW) && grounded) posY += jumpHeight;
}

function move(){

    jump();

    checkBounds();

    // Attempt to check if the player is out of the bounds, then moves based on keyinput
    if(keyIsDown(68)) posX += moveSpeed;
    if(keyIsDown(65)) posX -= moveSpeed;

}

function checkBounds(){
    moveSpeed = (posX <= 10 || posX >= 490 ? 0 : 10);
    posX = (posX <= 10 ? 11 : posX >= 490 ? 489 : posX);
}

function score(){
    text("Score = " + (nf(millis()/1000, 1,2 )), 10, 10);
}

function handleGround(){ 

    // Creates the ground and checks if player is on ground
    rect(0, groundY, 500, 100);
    if((posY + 15) > groundY){
        grounded = true;
    } else {
        grounded = false;
    }
    
} 

function doGravity(){
      
    // Does the gravity if player is off ground
    if(!grounded){
        posY += 0.3;
    }

}





