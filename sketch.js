
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // the music is loaded here
    music = loadSound ("music.mp3")
}

function setup(){

    canvas = createCanvas(800,600);

// block 1 is created with color
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
// block 2 is created with color
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";
// block 2 is created with color
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";
// block 2 is created with color
    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

  // the ball is created to bounce off the blocks and is given velocity y , x
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 5
    ball.velocityX = 5
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
//if ball is touching block 1 the colour changes to white else blue
    if(block1.isTouching(ball) ){
        ball.shapeColor = "blue";
        music.play();
        block1.shapeColor = "white"
    }else {
      block1.shapeColor = "blue"
     
    }
 //if ball is touching block 2 the colour changes to white else yellow
if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
        block2.shapeColor = "white"
        music.stop()
        ball.velocityX = 0
        ball.velocityY = 0
  } else {
       block2.shapeColor = "yellow"

     }
//if ball is touching block 3 the colour changes to white else red
  if(block3.isTouching(ball) ){
      ball.shapeColor = "red";
      block3.shapeColor = "white"
    
       
} else {
       block3.shapeColor = "red"
       }
//if ball is touching block 4 the colour changes to white else green
  if(block4.isTouching(ball) ){
    ball.shapeColor = "green";
    block4.shapeColor = "white"
 
       
} else {
       block4.shapeColor = "green"
      }
// A code is written for the ball to bounce off block 1
    if(ball.y -block1.y < ball.height/2 + block1.height/2 && block1.y -ball.y < ball.height/2 + block1.height/2 ){
        ball.velocityY = ball.velocityY*(1)
   
      }
      if(ball.x -block1.x < ball.width/2+block1.width/2  && block1.x -ball.x <ball.width/2+block1.width/2){
        ball.velocityX = ball.velocityX*(1)
      
      }

  //A code is written for the ball to bounce off block 2
    if(ball.y -block2.y < ball.height/2 + block2.height/2 && block2.y -ball.y < ball.height/2 + block2.height/2 ){
        ball.velocityY = ball.velocityY*(-1)
      
      }
      if(ball.x -block2.x < ball.width/2+block2.width/2  && block2.x -ball.x <ball.width/2+block2.width/2){
        ball.velocityX = ball.velocityX*(1)
    
       }

 //A code is written for the ball to bounce off block 3
     if(ball.y -block3.y < ball.height/2 + block3.height/2 && block3.y -ball.y < ball.height/2 + block3.height/2 ){
        ball.velocityY = ball.velocityY*(1)
      
       }
      if(ball.x -block3.x < ball.width/2+block3.width/2  && block3.x -ball.x <ball.width/2+block3.width/2){
        ball.velocityX = ball.velocityX*(1)
     
        }

//A code is written for the ball to bounce off block 4
    if(ball.y -block4.y < ball.height/2 + block4.height/2 && block4.y -ball.y < ball.height/2 + block4.height/2 ){
        ball.velocityY = ball.velocityY*(1)
  
      }
      if(ball.x -block4.x < ball.width/2+block4.width/2  && block4.x -ball.x <ball.width/2+block4.width/2){
        ball.velocityX = ball.velocityX*(1)
       
       }

    drawSprites();
}


