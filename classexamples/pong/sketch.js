//pong clone
//mouse to control both paddles
var startScreen;
var gameScreen;
var scoreBoard;

var leftPlayer = 0;
var rightPlayer = 0;

var title = ["Welcome to Miami Vice Pong!"]
var instruction = ["Hit P on Your Keyboard to Play"]

var gameScreen = false;
var paddleA, paddleB, ball, wallTop, wallBottom;
var MAX_SPEED = 10;

var interval = 5000;
var prevMillis = 0;
var counter = 0;



function preload(){
  miamiImage = loadImage("miami.jpg");
  courtImage = loadImage("court.png");
}


function setup() {
  createCanvas(800, 400);
  //frameRate(6);
  startScreen = background(miamiImage);
  textSize(60);
  fill("white");
  textFont('Lato');
  textStyle(BOLDITALIC);
  text(title, 20, 100);
  text(instruction, 20, 180);

  paddleA = createSprite(30, height/2, 10, 100);
  paddleA.immovable = true;

  paddleB = createSprite(width-28, height/2, 10, 100);
  paddleB.immovable = true;

  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;

  ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED;

  paddleA.shapeColor = paddleB.shapeColor =ball.shapeColor = color(255, 255, 255);

  ball.setSpeed(MAX_SPEED, -180);

}

function draw() {
    if(startScreen==true){

    }

    if(gameScreen==true){
      console.log("game");
      background(courtImage);
      paddleA.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);
      paddleB.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);

      ball.bounce(wallTop);
      ball.bounce(wallBottom);


      var swing;
      if(ball.bounce(paddleA)) {
        swing = (ball.position.y-paddleA.position.y)/3;
        ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
      }

      if(ball.bounce(paddleB)) {
        swing = (ball.position.y-paddleB.position.y)/3;
        ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
      }

      if(ball.position.x<0) {
        // ball.position.x = width/2;
        // ball.position.y = height/2;
        // ball.setSpeed(MAX_SPEED, 0);
        //keep score

        rightPlayer++;
        scoreBoard = true;
        gameScreen = false;

        prevMillis = millis();

        console.log("right score");
      }

      if(ball.position.x>width) {
        // ball.position.x = width/2;
        // ball.position.y = height/2;
        // ball.setSpeed(MAX_SPEED, 180);
        leftPlayer++;
        scoreBoard = true;
        gameScreen = false;


        console.log("left score");
        prevMillis = millis();


      }

      drawSprites();

    }

    if(scoreBoard==true){
      background(courtImage);
        text("Player Left Score:", 200,150);

        text("Player Right Score:", 200,250);
        if(millis() - prevMillis > interval){
          prevMillis = millis();
          scoreBoard = false;
          gameScreen = true;
          console.log("timer done");
          ball.position.x = width/2;
          ball.position.y = height/2;
          ball.setSpeed(MAX_SPEED, 180);
        }

      }

      //check for score then win
      //reset the game
    }



  function keyPressed(){
    if(key == 'p'){
      gameScreen = true;
      ball.position.x = width/2;
      ball.position.y = height/2;
    }
  }
