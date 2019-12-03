var title = ["Welcome to Seasonal Trivia!"]
var instruction = ["Use the season selector to toggle seasonal effects"]
var questions = ["When is the Earth closest to the Sun?","In Spring the earth’s axis tilts toward the:","The Eiffel Tower can grow ___ in hot weather","___ is caused by the Earth’s tilt, not our distance from the sun","Fall colors are caused by the amount of ___ in leaves"];
var options = ["1) Summer 2) Spring 3) Winter 4) Fall","1) Moon 2) Sun 3) Stars 4) Mars","1) 6in 2) 18in 3) 24in 4) 30in","1) Fall 2) Winter 3) Spring 4) Summer","1) Water 2) Pigment 3) CO2 4) Sugar"];
var answers = [2,1,0,0,3];
var currentOption = -1;//reers to what button the user has pressed

var buttons = [];
var currentQuestion = 0;

var answerText = "";
var showAnswer = false;
var interval = 5000;
var prevMillis = 0;

var seasonSelect;
var seasonType = "";
var leafX= [];
var leafY= [];
var leafAmount = 500;
var leafImage;
var snowX = [];
var snowY = [];
var snowAmount = 700;


function preload(){
  fallImage = loadImage("fall.jpeg");
  mountainImage = loadImage("mountain.jpeg");
  leafImage = loadImage("leaf.png");
}


function setup() {
  // put setup code here
createCanvas(1350,1000);

  buttons[0] = createButton ("1");
  buttons[0].size(100);
  buttons[0].position(10,300);
  buttons[0].style("background-color", "green");
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });//end of mousePressed

  buttons[1] = createButton ("2");
  buttons[1].size(100);
  buttons[1].position(200,300);
  buttons[1].style("background-color", "green");
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });//end of mousePressed

  buttons[2] = createButton ("3");
  buttons[2].size(100);
  buttons [2].position(390,300);
  buttons[2].style("background-color", "green");
  buttons [2].mousePressed(function(){
    currentOption = 2;
  });//end of mousePressed

  buttons[3] = createButton ("4");
  buttons[3].size(100);
  buttons [3].position(580,300);
  buttons[3].style("background-color", "green");
  buttons [3].mousePressed(function(){
    currentOption = 3;
  });//end of mousePressed

  seasonSelect = createSelect();
  seasonSelect.position(770,300);
  seasonSelect.option("");
  seasonSelect.option("fall");
  seasonSelect.option("winter");
  seasonSelect.changed(function(){
    seasonType = seasonSelect.value();
    });

    for(var i = 0; i<snowAmount; i++){
      snowX[i] = random(0,width);//random number is from 0 to width -1 or 0-399 (width of screen)
      snowY[i] = random(0, -1100);
    }

    //var i is destroyed after for loop is done
    console.log("snowX" + snowX);
    console.log("snowY" + snowY);


    for(var i = 0; i< leafAmount; i++){
      leafX[i] = random(0,width);
      leafY[i] = random(0,-500);
    }

    console.log("leafX" + leafX);
    console.log("leafY" + leafY);

}

function dinosaur(){
  textSize(40);
  fill("white");
  stroke("black");
  strokeWeight(3);
  textFont('Georgia');
  textStyle(BOLDITALIC);
  text(questions[currentQuestion], 20,235);
  text(options[currentQuestion], 20,270);
  text(title, 20, 100);
  text(instruction, 20, 150);
}

function draw() {
  image(fallImage,0,0);
  // put drawing code here

  if(seasonType == "fall"){
    console.log("fall");

    for(var f = 0; f<leafAmount; f++){
      if(leafY[f]<height - 20){
          leafY[f]++;
          leafX[f] = leafX[f] + sin(radians(frameCount));
          //console.log("leafY" + f + " " + leafY[f]);
        }

      image(leafImage, leafX[f], leafY[f], 20,20);
    }
  }else if(seasonType == "winter"){
    console.log("winter");

    for(var y = 0; y<snowAmount; y++){
      snowY[y]++; //same as snowY[y] = snowY[y]+1;
      ellipse(snowX[y],snowY[y],10,10);
      fill("white");
      stroke("black");
      strokeWeight(1);

      if(snowY[y] > height){
        snowY[y] = random(0,-500);
        snowX[y] = random(0,width);
      }

    }

  }

dinosaur();



  if(showAnswer == true){
    text(answerText, 20, 200);

    //start our timer
    if(millis()-prevMillis > interval){
      prevMillis = millis();
      showAnswer = false;
    }
  }//end of showAnswer == true



  //if the currentOption is not equal to -1
  if(currentOption != -1){
    //do something if currentOptionis not equal to -1
    console.log("currentOption" + currentOption);
    if(currentOption == answers[currentQuestion]){
      //correct
      console.log("correct");
      answerText = "correct";
      currentQuestion = currentQuestion + 1;
      //if(currentQuestion == 2){
      //array.Length counts how many items are in the array, questions.Length has 2 items
      if(currentQuestion == questions.length){
        currentQuestion = 0;
      }//setting array Limit
    }else{
      console.log("incorrect");
      answerText = "incorrect";
    }//check for correct or incorrect
    currentOption = -1;
    showAnswer = true;
    prevMillis = millis();
  }//end of currentOption != -1




}

function keyPressed(){
  if(key == "R"){
    seasonSelect="";
  }
}
