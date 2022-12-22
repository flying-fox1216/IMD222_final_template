let Engine = Matter.Engine,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Vertices = Matter.Vertices,
  Svg = Matter.Svg,
  Bodies = Matter.Bodies;

// create engine
let engine;

// add mouse control
let mouse;

let canvas;
let matterObjs = [];
let colors = ["#ececd1", "#f55a3c", "#f19648", "#f5d259", "#063e7b"];

function createWalls(thickness) {
  let walls = [
    new Rect(width * 0.5, 0, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
    new Rect(width * 0.5, height, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
    new Rect(width, height * 0.5, thickness, height, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
    new Rect(0, height * 0.5, thickness, height, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
  ];
  walls.forEach((wall) => matterObjs.push(wall));
}

let pathes = [
  "./svgFiles/fox5.svg",
  "./svgFiles/fox3.svg",
  "./svgFiles/fox2.svg",
  "./svgFiles/fox4.svg",
  "./svgFiles/svg.svg",
  "./svgFiles/fox.svg",
];

let loadSvg = function (url) {
  return fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (raw) {
      return new window.DOMParser().parseFromString(raw, "image/svg+xml");
    });
};

let aaa = function (root, x, y, sampleLength, scaleX, scaleY) {
  let vertexSets = select(root, "path").map(function (path) {
    return Vertices.scale(
      Svg.pathToVertices(path, sampleLength),
      scaleX,
      scaleY
    );
  });
  matterObjs.push(
    new FromConcaveBody(
      Bodies.fromVertices(x, y, vertexSets, null, true)
    ).setFillColor(colors[Math.floor(random(colors.length))])
  );
};

let bg;
let bg2;

function setup() {
  let dom = document.getElementById("p5Canvas");
  canvas = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );
  canvas.parent("p5Canvas");
  bg = loadImage("./image/fox2.png");
  bg2 = loadImage("./image/feet2.png");

  engine = Engine.create();
  world = engine.world;

  // add bodies
  if (typeof fetch !== "undefined") {
    let select = function (root, selector) {
      return Array.prototype.slice.call(root.querySelectorAll(selector));
    };

    loadSvg(pathes[0]).then(function (root) {
      let vertexSets = select(root, "path").map(function (path) {
        return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
      });
      let newObj = new FromConcaveBody(
        Bodies.fromVertices(100, 100, vertexSets, null, true)
      ).setFillColor(colors[Math.floor(random(colors.length))]);
      matterObjs.push(newObj);
    });

    loadSvg(pathes[1]).then(function (root) {
      let vertexSets = select(root, "path").map(function (path) {
        return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
      });
      let newObj = new FromConcaveBody(
        Bodies.fromVertices(200, 200, vertexSets, null, true)
      ).setFillColor(colors[Math.floor(random(colors.length))]);
      matterObjs.push(newObj);
    });

    loadSvg(pathes[2]).then(function (root) {
      let vertexSets = select(root, "path").map(function (path) {
        return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
      });
      let newObj = new FromConcaveBody(
        Bodies.fromVertices(300, 300, vertexSets, null, true)
      ).setFillColor(colors[Math.floor(random(colors.length))]);
      matterObjs.push(newObj);
    });

    loadSvg(pathes[3]).then(function (root) {
      let vertexSets = select(root, "path").map(function (path) {
        return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
      });
      let newObj = new FromConcaveBody(
        Bodies.fromVertices(400, 400, vertexSets, null, true)
      ).setFillColor(colors[Math.floor(random(colors.length))]);
      matterObjs.push(newObj);
    });

    loadSvg(pathes[4]).then(function (root) {
      let vertexSets = select(root, "path").map(function (path) {
        return Svg.pathToVertices(path, 30);
      });
      let newObj = new FromConcaveBody(
        Bodies.fromVertices(500, 100, vertexSets, null, true)
      ).setFillColor(colors[Math.floor(random(colors.length))]);
      matterObjs.push(newObj);
    });

    loadSvg(pathes[5]).then(function (root) {
      let vertexSets = select(root, "path").map(function (path) {
        return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
      });
      let newObj = new FromConcaveBody(
        Bodies.fromVertices(500, 200, vertexSets, null, true)
      ).setFillColor(colors[Math.floor(random(colors.length))]);
      matterObjs.push(newObj);
    });
  } else {
    console.log("Fetch is not available. Could not load SVG.");
  }

  createWalls(50);

  console.log(matterObjs);

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(world, mouseConstraint);
}

let LeyeW = 2.8;
let ReyeW = 1.55;
let eyeH = 1.25;
let eyeS = 7;

function draw() {
  background(255);

  imageMode(CENTER);
  fill("#f19955");
  noStroke();
  // rect(0, height / 2.35, width, height);
  image(bg, width / 2, height / 1.3, width, height / 3);
  image(bg2, width / 2, height / 1.2, width, height / 2);

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

  Engine.update(engine);
  matterObjs.forEach((obj) => {
    obj.render();
  });
  // matterObjs.forEach((obj) => {
  //   obj.renderDirVector();
  // });
}
