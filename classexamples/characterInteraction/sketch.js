//Global variables, these are available trhoughout your program
var pointX = 0;
var pointY = 0;

var faceColor = "purple";

var faceButton;


function setup() {
  // put setup code here
  //if you declare a variable inside of a block of code id {}, that variable will only be available inside of that block
  createCanvas(500,500);
  pointX = width/2
  pointY = height/2
  console.log(" pointX " + pointX + " pointY " + pointY);

  var message = "Hello";

  console.log(message);

  faceButton = createButton("Click to turn orange");
  faceButton.position(20,20);
  faceButton.mousePressed(function(){
    //your action goes in here
    //the button mousepressed function is tied tot he general mouspressed function

    faceColor="orange";



  });
}

function draw() {
  // put drawing code here



  // I want to change the background based, split of screen vertically

  if(mouseX < width/2){
    console.log("left hand side");
      background(255);

  }

  if(mouseX > width/2){
    console.log("right hand side");
      background("green");
  }
  if(mouseX == width/2){
    console.log("center");
    background("yellow");
  }

  pointX = mouseX;
  pointY = mouseY;

  //console.log(" pointX " + pointX + " pointY " + pointY);

  fill(faceColor);
  rect(pointX - 100,pointY - 100,200,200);//blockhead

  ellipse(pointX,pointY,10,10);//nose
  ellipse(pointX + 20,pointY - 20,30,30);//right eye
  ellipse(pointX - 20,pointY - 20,30,30);//left eye
  arc(pointX,pointY + 10, 50,50,0,PI);//smile

  var drawMessage = "this message is in the draw loop"; //this creates a mew variable everytime the draw Loop happens
  console.log (drawMessage);



}// end of draw


function mousePressed(){
  //faceColor = "red";

}

function mouseReleased() {
  //faceColor = "purple";

}

function keyPressed(){

  console.log("key" + key);
  console.log("keyCode" + keyCode);

  //if statement is true, than execute code inside {}
  // == if one side equals the other
  // if you press b, then key becomes "b" == "b" which is true
  //key returns a character and keycode returns a number
  if(key == "b"){
    faceColor = "blue";

  }

  // if you press r, then keyCode becomes 82, 82 == 82 which is true
  if(keyCode == 82){
    faceColor = "red";
  }

}
