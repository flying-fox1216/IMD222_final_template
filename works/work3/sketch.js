let beginX = 20.0;
let beginY = 130.0;
let endX = 570;
let endY = 320;
let distX;
let distY;
let exponent = 3;
let x = 0.0;
let y = 0.0;
let step = 0.012;
let pct = 0.0;
let bg;
let bg2;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  noStroke();
  background(255);
  distX = endX - beginX;
  distY = endY - beginY;
  bg = loadImage("./image/fox2.png");
  bg2 = loadImage("./image/feet.png");
  // canvas.parent("eye");
  // var cnv = createCanvas(windowWidth, 300);
  // cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2 + 30);
  // canvas.position(100, 0);
}

let LeyeW = 2.8;
let ReyeW = 1.55;
let eyeH = 1.25;
let eyeS = 7;

function draw() {
  // fill(255, 255, 255, 0.5);
  // rect(0, 0, width, height);

  background(255, 40);

  // background(bg);
  imageMode(CENTER);
  fill("#f19955");
  rect(0, height / 1.05, width, height / 5);
  image(bg, width / 2, height / 1.3, width, height / 3);
  image(bg2, width / 2, height / 1.15, width, height / 3);

  noStroke();
  fill(255);
  circle(width / LeyeW, height / eyeH, width / 7);
  circle(width / ReyeW, height / eyeH, width / 7);
  //iris
  let xc = constrain(x, width / LeyeW - width / 50, width / LeyeW + width / 50);
  let xs = constrain(y, height / eyeH - width / 75, height / eyeH + width / 75);
  fill(0);
  circle(xc, xs, width / 15);
  let xc2 = constrain(
    x,
    width / ReyeW - width / 50,
    width / ReyeW + width / 50
  );
  let xs2 = constrain(
    y,
    height / eyeH - width / 75,
    height / eyeH + width / 75
  );
  fill(0);
  circle(xc2, xs2, width / 15);
  //glare
  fill(255);
  circle(xc + width / 90, xs - width / 90, width / 70);
  circle(xc2 + width / 90, xs2 - width / 90, width / 70);

  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(50);
  circle(x, y, 40);
}

function mousePressed() {
  pct = 0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
