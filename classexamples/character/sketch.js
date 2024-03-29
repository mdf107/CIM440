
var eyeSize = 40;
var mouthX = 80;
var mouthY = 200;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here
  strokeWeight(1);

  fill("blue");//css color
  ellipse(100,100,eyeSize,eyeSize);//left eye

  ellipse(140,100,eyeSize,eyeSize);//right eye


  fill(255,0,0);//rgb color
  rect(mouthX,mouthY,100,30);//mouth

  fill(255);//grey scale color
  strokeWeight(5);
  point(72,382);//mole

  strokeWeight(1);
  line(80,215,180,215);//mouth split

  //width and height
  //console.log("width " + width);
  //console.log(height);

triangle(width/2,height/2,width/2+10, height/2+10, width/2-10, height/2+10);

arc(300,300,50,50,0,PI);
arc(400,400,50,50,PI+HALF_PI,0)
arc(300,150,50,50,0,TWO_PI)

triangle(100,400,120,420,80,420)

arc(200,200,50,50,HALF_PI,PI+HALF_PI);//ear

line(100,275,200,275);//straight line




}
