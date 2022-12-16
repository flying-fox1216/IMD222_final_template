let beginX = 20.0;
let beginY = 10.0;
let endX = 570.0;
let endY = 320.0;
let distX;
let distY;
let exponent = 5;
let x = 0.0;
let y = 0.0;
let step = 0.01;
let pct = 0.0;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(255);
  circle(x, y, 20, 20);
}

function mousePressed() {
  pct = 0;
  beginX = x;
  geginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
