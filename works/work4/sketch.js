let { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let box;
let box2;
let box3;
// let boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

let img;
let bg;

function preload() {
  img = loadImage("./image/ball.png");
  bg = loadImage("./image/back.jpg");
}

let boxH = 150;
function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  // canvas2 = canvas;
  engine = Engine.create();
  world = engine.world;
  // console.log(Matter);
  ground = new Ground(width / 2, height, width, 50);
  ground2 = new Ground(width / 2, 0, width, 50);
  wall1 = new Ground(0, height / 2, 40, height);
  wall2 = new Ground(width, height / 2, 40, height);

  // for (let i = 0; i < 3; i++) {
  //   boxes[i] = new box(450, 300 - i * 75, 50, 75);
  // }
  box = new Box(width / 1.5, 300, 100, boxH);
  box2 = new Box(width / 1.5, 300 + boxH, 100, boxH);
  box3 = new Box(width / 1.5, 375 + boxH, 100, boxH);
  bird = new Bird(250, 300, 40);

  slingshot = new SlingShot(250, height - 300, bird.body);

  // let mouse = Mouse.create(canvas.elt);
  // let options = {
  //   mouse: mouse,
  // };
  // mConstraint = MouseConstraint.create(engine, options);
  // World.add(world, mConstraint);
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    // constraint: {
    //   stiffness: 0.2,
    //   render: {
    //     visible: false,
    //   },
    // },
  });

  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == " ") {
    World.remove(world, bird.body);
    bird = new Bird(250, 300, 40);
    slingshot.attach(bird.body);
  }
  if (key == "r") {
    World.remove(world, [box.body, box2.body, box3.body]);
    box = new Box(width / 1.5, 300, 100, boxH);
    box2 = new Box(width / 1.5, 300 + boxH, 100, boxH);
    box3 = new Box(width / 1.5, 375 + boxH, 100, boxH);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 50);
}

let LeyeW = 2.8;
let ReyeW = 1.55;
let eyeH = 1.25;
let eyeS = 7;

function draw() {
  background(bg);
  Matter.Engine.update(engine);
  ground.show();
  ground2.show();
  wall1.show();
  wall2.show();
  // for (let box of boxes) {
  //   box.show();
  // }
  box.show();
  box2.show();
  box3.show();
  bird.show();
  slingshot.show();

  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text("스페이스바 : 공 리셋 / R : 박스 리셋", width / 2, height / 20);

  // noStroke();
  // fill(255);
  // circle(width / LeyeW, height / eyeH, width / 7);
  // circle(width / ReyeW, height / eyeH, width / 7);
  // //iris
  // let xc = constrain(
  //   mouseX,
  //   width / LeyeW - width / 50,
  //   width / LeyeW + width / 50
  // );
  // let xs = constrain(
  //   mouseY,
  //   height / eyeH - width / 75,
  //   height / eyeH + width / 75
  // );
  // fill(0);
  // circle(xc, xs, width / 15);
  // let xc2 = constrain(
  //   mouseX,
  //   width / ReyeW - width / 50,
  //   width / ReyeW + width / 50
  // );
  // let xs2 = constrain(
  //   mouseY,
  //   height / eyeH - width / 75,
  //   height / eyeH + width / 75
  // );
  // fill(0);
  // circle(xc2, xs2, width / 15);
  // //glare
  // fill(255);
  // circle(xc + width / 90, xs - width / 90, width / 70);
  // circle(xc2 + width / 90, xs2 - width / 90, width / 70);
}
