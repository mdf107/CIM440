// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var sloth, puppy, dinosaur, panda, clownfish;

var sButton, pButton, dButton, bButton, cButton;

var currentImage = 0;

var curImage;

function preload(){
  sloth = loadImage("images/sloth.jpg");
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  panda = loadImage("images/panda.jpg");
  clownfish = loadImage("images/clownfish.jpg");
}



function setup() {
  // put setup code here
  createCanvas(400,400);

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){

    currentImage = 0;

  });

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){

    currentImage = 1;

  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){

    currentImage = 2;

  });
  bButton = createButton("Panda");
  bButton.mousePressed(function(){

    currentImage = 3;
  });
  cButton = createButton("Clownfish");
  cButton.mousePressed(function(){

    currentImage = 4;
  });

  curImage = sloth;
}

function draw() {
  background("white");

  console.log("currentImage" + currentImage);
  image(curImage,0,0,curImage.width/4,curImage.height/4);
  // put drawing code here

  if(currentImage == 0){
    curImage = sloth;
  }else if(currentImage == 1){
    curImage = puppy;
  }else if(currentImage == 2){
    curImage = dinosaur;
  }else if(currentImage == 3){
  curImage = panda;
  }else if(currentImage == 4){
  curImage = clownfish;
  }

  //image(curImage,0,0,curImage.width/4,curImage.height/4);
}
