var accuracy;
let slider;
function setup() {
  createCanvas(900, 900);
  // textSize(40);
  // fill(0, 102, 153, 51);
  // text('Чем левее слайдер, тем детальнее рисунок', 1140, 400);
  slider = createSlider(2, 352, 202, 10);
  slider.position(1140, 450);
  slider.style('width', '380px');
}
function draw(){
  background(90);
  accuracy = slider.value();
  rectMode(CORNERS);
  write(0, 0, 900, 900);
}
function write(x_start, y_start, x_end, y_end){
  if (((x_end - x_start)>accuracy)&&((y_end - y_start)>accuracy)){
    let dx = (x_end - x_start)/3;
    let dy = (y_end - y_start)/3;
    rectMode(CORNERS);
    noStroke();
    fill(90);
    rect(x_start, y_start, x_end, y_end);
    fill(220);
    rect(x_start+dx, y_start+dx, x_end-dx, y_end-dx);
    //up-left
    write(x_start, y_start, x_start+dx, y_start+dy);
    //up-up
    write(x_start+dx, y_start, x_start+dx*2, y_start+dy);
    //up-left
    write(x_start+2*dx, y_start, x_end, y_start+dy);
    //left
    write(x_start, y_start+dy, x_start+dx, y_end - dy);
    //right
    write(x_end - dx, y_start+dy, x_end, y_end - dy);
    //down-left
    write(x_start, y_end - dy, x_start+dx, y_end);
    //down-down
    write(x_start+dx, y_end - dy, x_start+2*dx, y_end);
    //down-right
    write(x_end-dx, y_end - dy, x_end, y_end);
  }
}
