//set-up
let n = 3;
let r = 220;
let g = 250;
let b = 230;
var deg = 3.1415926535892 / 180.0;

//points
var left_point = {
  x: 300,
  y: 300
};
var right_point = {
  x: 600,
  y: 300
};
let len = 300;
var down_point = {
  x: left_point.x*0.5+right_point.x*0.5,
  y: left_point.y+sqrt(3)*len/2
};


function setup() {
  createCanvas(900, 900);
  slider = createSlider(0, 8, 4, 1);
  slider.position(1040, 450);
  slider.style('width', '380px');
}


function draw(){
  background(75);
  n = slider.value();
  translate(left_point.x, left_point.y);
  leg_up(n, len);
  translate(-len, 0);//left_point
  rotate(60*deg);
  leg(n,len);
  rotate(-120*deg);
  leg(n ,len);
}


function leg(n, len){
  push();
  if (n == 0){
    stroke(r, g, b);
    strokeWeight(0.3);
    line(0,0,len, 0);
  }
  else{
    let dl = len/3;
    leg(n-1, dl);
    rotate(60*deg);
    leg(n-1, dl);
    rotate(-120*deg);
    leg(n-1, dl);
    rotate(60*deg);
    leg(n-1, dl);
  }
  pop();
  translate(len, 0);
}

function leg_up(n, len){
  push();
  if (n == 0){
    stroke(r, g, b);
    strokeWeight(0.3);
    line(0,0,len, 0);
  }
  else{
    let dl = len/3;
    leg_up(n-1, dl);
    rotate(-60*deg);
    leg_up(n-1, dl);
    rotate(120*deg);
    leg_up(n-1, dl);
    rotate(-60*deg);
    leg_up(n-1, dl);
  }
  pop();
  translate(len, 0);
}
