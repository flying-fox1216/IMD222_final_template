var x = 100,
  y = 200,
  radius = 10,
  xspd,
  yspd;
var i;
var j;
var targetX;
var targetY;
var score;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  // set the initial x,y speed
  xspd = random(1, 30);
  yspd = random(1, 30);
  targetX = random(width - 50);
  targetY = random(height - 50);
  score = 0;
}

let LeyeW = 2.8;
let ReyeW = 1.55;
let eyeH = 3.5;
let eyeS = 7;

function draw() {
  background(0);

  fill(255);
  noStroke();
  ellipse(x, y, radius * 3.5, radius * 3.5);

  // update the position based on speed
  x = x + xspd;
  y = y + yspd;

  // check collision with left/right wall
  if ((xspd > 0 && x >= width - radius) || (xspd < 0 && x <= radius)) {
    xspd = xspd * -1;
  }

  // check collision with top/bottom wall
  if ((yspd > 0 && y >= height - radius) || (yspd < 0 && y <= radius)) {
    yspd = yspd * -1;
  }

  // here is where we allow user to throw ball
  if (mouseIsPressed) {
    var dx = mouseX - pmouseX; // change in x-position
    var dy = mouseY - pmouseY; // change in y-position
    var dt = 1000 / frameRate(); // milliseconds per frame

    xspd = (dx / dt) * 10; // adjust xspd
    yspd = (dy / dt) * 10; // adjust yspd

    // x = mouseX; // move ball-x to mouseX
    // y = mouseY; // move ball-y to mouseY
  }

  noFill();
  stroke(0, 200, 0);

  for (var i = 0; i < 7; i++) {
    ellipse(targetX, targetY, 5 + i * 13, 5 + i * 13);
  }

  noStroke();
  fill(255);
  circle(targetX - width / 60, targetY, width / 50);
  circle(targetX + width / 60, targetY, width / 50);
  //iris
  let xc = constrain(
    x,
    targetX - width / 60 - width / 300,
    targetX - width / 60 + width / 300
  );
  let xs = constrain(y, targetY - width / 300, targetY + width / 300);
  fill(255, 100, 0);
  circle(xc, xs, width / 80);
  let xc2 = constrain(
    x,
    targetX + width / 60 - width / 300,
    targetX + width / 60 + width / 300
  );
  let xs2 = constrain(y, targetY - width / 300, targetY + width / 300);
  fill(255, 100, 0);
  circle(xc2, xs2, width / 80);
  //glare
  fill(255);
  circle(xc + width / 900, xs - width / 900, width / 200);
  circle(xc2 + width / 900, xs2 - width / 900, width / 200);

  fill(255);
  textSize(30);
  textAlign(CENTER);

  text("Score= " + score, width / 2, 30);
  var d = dist(x, y, targetX, targetY);
  if (d < 20) {
    score = score + 1;
    targetX = random(width);
    targetY = random(height);
  }
}
