function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(133, 182, 215);
  //ground
  rectMode(CORNER);
  fill(37,110,62);
  noStroke();
  rect(0,600,800,200);
  //body
  rectMode(CORNERS);
  fill(200,30,30);
  stroke(210,35,35);
  strokeWeight(8);
  rect(130,440,680,580, 20,20,20,20);
  //wheels
  ellipseMode(CENTER);
  stroke(40);
  strokeWeight(14);
  fill(87,70,48);
  ellipse(220,580,110,110);
  ellipse(555, 580, 110,110);

  //glass
  stroke(62,130,238,214);
  strokeWeight(10);
  line(600,440,495,340);
  //light
  fill(246,179,5);
  stroke(253,179,5);
  ellipseMode(CENTER);
  strokeWeight(8);
  ellipse(683,530,8,23);
  //sun
  ellipseMode(CENTER);
  fill(254,170,9);
  noStroke();
  ellipse(0,0,240,240);
  stroke(254,170,9);
  line(110,110,140, 140);
  line(80,150,100, 180);
  line(140,80,180, 100);
}