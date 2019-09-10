
var eyeSize = 80;
var faceSize = 475;
var smileSize = 160;
var splitFace = 474;
var eyeAlign = 100;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,12,255);
}

function draw() {
  // put drawing code here

  ellipse(250,250,faceSize,faceSize);//top half of face
  fill(174, 193, 255);

  strokeWeight(5);
  ellipse(200,100,eyeSize,eyeSize);//left eye


  ellipse(300,100,eyeSize,eyeSize);//right eye


  point(200,eyeAlign);//pupil
  point(300,eyeAlign);


  //width and height
  //console.log("width " + width);
  //console.log(height);

  triangle(width/4,height/4,width/2+10, height/2+10, width/2-18, height/2+18);//nose

  arc(250,258,splitFace,splitFace,0,PI);//bottom half of face

  arc(250,300,smileSize,smileSize,0,PI);//mouth
  fill(247,113,113);



}
