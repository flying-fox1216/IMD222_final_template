let bg;
let bg2;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  // noStroke();
  // background(255);
  bg = loadImage("./image/fox2.png");
  bg2 = loadImage("./image/feet.png");
}

let howManyX = 20;
let howManyY = 20;

let LeyeW = 2.8;
let ReyeW = 1.55;
let eyeH = 3.5;
let eyeS = 7;

function draw() {
  imageMode(CENTER);
  fill("#f19955");
  noStroke();
  rect(0, height / 2.35, width, height);
  image(bg, width / 2, height / 4, width, height / 3);
  image(bg2, width / 2, height / 3, width, height / 3);

  noStroke();
  fill(255);
  circle(width / LeyeW, height / eyeH, width / 7);
  circle(width / ReyeW, height / eyeH, width / 7);
  //iris
  let xc = constrain(
    mouseX,
    width / LeyeW - width / 50,
    width / LeyeW + width / 50
  );
  let xs = constrain(
    mouseY,
    height / eyeH - width / 40,
    height / eyeH + width / 40
  );
  fill(0);
  circle(xc, xs, width / 15);
  let xc2 = constrain(
    mouseX,
    width / ReyeW - width / 50,
    width / ReyeW + width / 50
  );
  let xs2 = constrain(
    mouseY,
    height / eyeH - width / 40,
    height / eyeH + width / 40
  );
  fill(0);
  circle(xc2, xs2, width / 15);
  //glare
  fill(255);
  circle(xc + width / 90, xs - width / 90, width / 70);
  circle(xc2 + width / 90, xs2 - width / 90, width / 70);
}
