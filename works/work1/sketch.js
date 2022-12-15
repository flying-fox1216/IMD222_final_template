function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  let dom = document.getElementById("eye");
  let canvas2 = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );
  canvas.parent("eye");
  var cnv = createCanvas(windowWidth, 300);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2 + 30);
}

function draw() {
  //   background(220);
  //whites ofeye
  noStroke();
  fill(255);
  circle(width / 2.45, height / 2.5, width / 12);
  circle(width / 1.7, height / 2.5, width / 12);
  //iris
  let xc = constrain(
    mouseX,
    width / 2.45 - width / 70,
    width / 2.45 + width / 70
  );
  let xs = constrain(
    mouseY,
    height / 2.5 - width / 75,
    height / 2.5 + width / 75
  );
  fill(0);
  circle(xc, xs, width / 25);
  let xc2 = constrain(
    mouseX,
    width / 1.7 - width / 70,
    width / 1.7 + width / 70
  );
  let xs2 = constrain(
    mouseY,
    height / 2.5 - width / 75,
    height / 2.5 + width / 75
  );
  fill(0);
  circle(xc2, xs2, width / 25);
  //glare
  fill(255);
  circle(xc + width / 90, xs - width / 90, width / 90);
  circle(xc2 + width / 90, xs2 - width / 90, width / 90);
}
