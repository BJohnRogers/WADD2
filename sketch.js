let posX = 250;
let posY = 250;
let jumpHeight = -100;
let ease = 0.1;
let groundY = 400;
let gravity = 0.3;
let grounded = true;
let player;

function setup(){
    var theCanvas = createCanvas(500, 500);
    theCanvas.parent('#game');
    player = new Player();
}

function draw(){

    background(100);
    fill(130, 130, 130);

    score();
    player.draw(posX, posY, 20);
    handleGround();
    
    doGravity();
    move();
    

}

function jump(){
    // Jump function
    posY += jumpHeight;
}

function move(){

    // Attempt to check if the player is out of the bounds, then moves based on keyinput
    if(keyIsDown(68)) if(!posX <= 10 || !posX >= 499) posX+=10;
    if(keyIsDown(65)) posX-=10;

}

function score(){
    text("Score = " + (nf(millis()/1000, 1,2 )), 10, 10);
}

function handleGround(){ 

    // Creates the ground and checks if player is on ground
    rect(0, groundY, 500, 100);
    if((posY) > groundY){
        grounded = true;
    } else {
        grounded = false;
    }
    
} 

function doGravity(){
      
    // Does the gravity if player is off ground
    if(!grounded){
        posY += gravity * deltaTime; 
    }

}

function keyPressed(){
    // Checks if space is pressed and if the player is on ground
    if(keyCode == 32 && grounded) jump();
}




