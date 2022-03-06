var wid = 150;
function setup(){
  createCanvas(900, 900);
  slider = createSlider(1, 80, 10, 1);
  slider.position(1040,450);
  slider.style('width', '380px');
  background(90);
}

function draw(){
  // var accuracy = 30;
  background(90);
  rectMode(CENTER);
  noStroke();
  translate(width/2, height - wid/2);
  branch(wid);
}
function branch(w){
  var accuracy = slider.value();
  var angle = PI/4.0;
  var alpha = 0.67;
  rect(0, 0 , -w, -w);
  if (w>accuracy){
    push();
    translate(w/2, -w);
    rotate(angle);
    branch(w*alpha);
    pop();
    translate(-w/2, -w);
    rotate(-angle);
    branch(w*0.67);
  }
}
