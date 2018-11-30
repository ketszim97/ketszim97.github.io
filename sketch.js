var pos =25;

function mouseWheel(event){
  pos += event.delta;
}

var cols, rows;
var scl = 20;
var w = 2000;
var h = 1000;

var flying = 0;
var swimming = 0;

var flag = 0;
var terrain = [];

function keyTyped(){
  if(key === ' '){
    //flyingMouse =0;
    flag = ~flag;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight-180, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
      terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying = map(mouseY, 0, 1000, 0, 7);
  swimming = map(mouseX, 0, 1000, 0, 7);

  var yoff = flying;
  // flag = map(second(),0,10,0,100);
  for (var y = 0; y < rows; y++) {
    var xoff = swimming;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -200, 150);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(255);
  translate(0, 10);
  rotateX(PI/3);
  fill(50, 30);
  translate(-w/2, -h/2);

  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}
