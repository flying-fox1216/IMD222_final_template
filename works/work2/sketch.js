var s;
var scl = 30;
let scoreElem;
let howto;

var food;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  s = new Snake();
  frameRate(10);
  pickLocation();
  scoreElem = createDiv("Score = 0");
  scoreElem.position(width / 2, height / 20);
  scoreElem.id = "score";
  scoreElem.style("color", "white");
  howto = createDiv("방향키 : 상하좌우 / 마우스 클릭 : 재시작");
  howto.position(width / 2, height / 40);
  howto.style("color", "white");
  // food = createVector(random(width), random(height));
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  loop();
  const prevScore = parseInt(scoreElem.html().substring(8));
  scoreElem.html("Score = 0 ");
  this.x = width / 2;
  this.y = height / 2;
}

let LeyeW = 3;
let ReyeW = 1.4;
let eyeH = 5;
let eyeS = 7;

function draw() {
  background(51);

  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  circle(food.x + width / 70, food.y + width / 70, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
}

function Snake() {
  this.x = width / 2;
  this.y = height / 2;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      const prevScore = parseInt(scoreElem.html().substring(8));
      scoreElem.html("Score = " + (prevScore + 1));
      return true;
    } else {
      return false;
    }
  };

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.xspeed = 0;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        const scoreVal = parseInt(scoreElem.html().substring(8));
        scoreElem.html("Game ended! Your score was : " + scoreVal);
        noLoop();
      }
    }
  };

  this.update = function () {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.show = function () {
    fill("#399700");
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    fill("#399700");
    rect(this.x, this.y, scl, scl);

    noStroke();
    fill(255);
    circle(this.x + scl / 2, this.y + scl / 2, width / 40);

    //iris
    let xc = constrain(
      food.x + width / 70,
      this.x + scl / 2 - scl + 26,
      this.x + scl / 2 + scl - 26
    );
    let xs = constrain(
      food.y + width / 70,
      this.y + scl / 2 - scl + 26,
      this.y + scl / 2 + scl - 26
    );
    fill(0);
    circle(xc, xs, width / 80);

    //glare
    fill(255);
    circle(xc + 2, xs - 2, width / 250);
  };
}
