function setup() {
  // put setup code here
  var cnv = createCanvas(1350,1000);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  //to search for an id, you use the # token in front of the name
  //.html() function allows you to inject html or text into another html tag
  select("#container0").html("<h1>Your sketch title here!</h1>");

  //.style("css property", "value")
  select("#container0").style("width","400px");
  select("#container0").style("margin","0 auto");//center your container, margin: 0 auto,0 refers to top and bottom spacing, the auto refers to left and right spacing, and this will only work if you set a width

  cnv.parent("#container0");

  select('body').style("background-color","orange");
  var container1 = createDiv();
  container1.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/mrZMAnsqZWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}

function draw() {
  // put drawing code here
  background(0);

}
