let { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let box;
let bird;
let world, engine;
let mConstraint;

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
  ground = new Ground(width / 2, height - 20, width, 20);
  box = new Box(450, 300, 50, 75);
  bird = new Bird(50, 300, 25);

  let mouse = Mouse.create(canvas.elt);
  let options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function draw() {
  background(0);
  Matter.Engine.update(engine);
  ground.show();
  box.show();
  bird.show();
}
