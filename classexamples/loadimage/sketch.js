var puppies;





function preload(){

  puppies = loadImage("puppy.jpg");

}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  //image var, x pos,y pos
  image(puppies,0,0); //full scale
  image(puppies,100,100,puppies.width/4,puppies.height/4);//when you divide by a number, the image will scale proportionally
  //set dimensions
  image(puppies,200,200,125,200);
}
