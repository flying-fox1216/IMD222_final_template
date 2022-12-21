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
let eyeH = 1.25;
let eyeS = 7;

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(10);
  let tileWidth = width / (howManyX + 1);
  let tileHeight = height / (howManyY + 1);
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = tileWidth * (tileCntX + 1);
      let tileCenterY = tileHeight * (tileCntY + 1);
      // 점A~타일 중심에서
      // 점B~마우스로 향하는
      // 각도 구하는 용도로 씀
      // A: (x, y), B: (i, j)
      // atan2(j - y, i - x)
      let toMouseAngle = atan2(mouseY - tileCenterY, mouseX - tileCenterX);
      let colorR = (255 * tileCntX) / (howManyX - 1);
      let colorB = (255 * tileCntY) / (howManyY - 1);
      push();
      translate(tileCenterX, tileCenterY);
      rotate(toMouseAngle);
      noFill();
      stroke(colorR, 200, colorB);
      strokeWeight(10);
      line(0 - tileWidth * 0.5 + 5, 0, 0 + tileWidth * 0.5 - 5, 0);
      pop();
    }
  }
  imageMode(CENTER);
  fill("#f19955");
  noStroke();
  rect(0, height / 1.08, width, height / 5);
  image(bg, width / 2, height / 1.3, width, height / 3);
  image(bg2, width / 2, height / 1.15, width, height / 3);

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
    height / eyeH - width / 50,
    height / eyeH + width / 50
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
    height / eyeH - width / 50,
    height / eyeH + width / 50
  );
  fill(0);
  circle(xc2, xs2, width / 15);
  //glare
  fill(255);
  circle(xc + width / 90, xs - width / 90, width / 70);
  circle(xc2 + width / 90, xs2 - width / 90, width / 70);
}
