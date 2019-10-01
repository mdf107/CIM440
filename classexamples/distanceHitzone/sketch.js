var hitX = 100;
var hitY = 100;
var threshold = 20;

var hitDistance = 0; //available throughout the entire program
var changeBackground = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(changeBackground); //remember to add this background with many differnt interactive elements
  hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance" + hitDistance);
  //if the distance is less than or equal to 20, our range is 0-20 including 20
  if(hitDistance <= threshold){
    fill(127);
    text("Click Me", hitX,hitY + 30);
  }else{
    //if the above is not true, than execute the else state
    fill(255);
  }


  ellipse(hitX,hitY,threshold*2,threshold*2);


}

function mousePressed(){
  //on click
  if(hitDistance <= threshold){
    console.log("Clicked");
    changeBackground = "blue";
  }else{
    //if the above is not true, than execute the else state
    console.log("Clicked Outside");
    changeBackground = "white";
  }
}
