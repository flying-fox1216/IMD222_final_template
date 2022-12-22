var rain = [];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  rain.push(new Rain());
  score = new Score();
  box = new Player();
  box.setStart();
  noStroke();
}

let LeyeW = 3;
let ReyeW = 1.4;
let eyeH = 5;
let eyeS = 7;

function draw() {
  background(0);

  noStroke();
  fill(255);
  ellipse(width / LeyeW, height / eyeH, width / 4, width / 7);
  ellipse(width / ReyeW, height / eyeH, width / 4, width / 7);
  //iris
  let xc = constrain(
    box.x,
    width / LeyeW - width / 20,
    width / LeyeW + width / 20
  );
  let xs = constrain(
    box.y,
    height / eyeH - width / 75,
    height / eyeH + width / 75
  );
  fill(0);
  ellipse(xc, xs, width / 20, width / 9);
  let xc2 = constrain(
    box.x,
    width / ReyeW - width / 20,
    width / ReyeW + width / 20
  );
  let xs2 = constrain(
    box.y,
    height / eyeH - width / 75,
    height / eyeH + width / 75
  );
  fill(0);
  ellipse(xc2, xs2, width / 20, width / 9);
  //glare
  fill(100);
  ellipse(xc + width / 500, xs - width / 500, width / 150, width / 20);
  ellipse(xc2 + width / 500, xs2 - width / 500, width / 150, width / 20);
  // fill(255);
  // circle(xc + width / 90, xs - width / 50, width / 75);
  // circle(xc2 + width / 90, xs2 - width / 50, width / 75);

  box.render();
  score.render();

  for (var j = 0; j < rain.length; j++) {
    rain[j].render();
  }
  if (frameCount % 150 == 0) {
    addRain();
  }
}

function addRain() {
  for (var i = 0; i < 1; i++) {
    rain.push(new Rain());
  }
}

class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 30;
    this.speed = 6;
    this.hp = 100;
  }

  render() {
    this.health();
    this.update();
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("player", this.x, this.y - this.size);
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.controller();
    if (this.x > width + this.size) {
      this.x = 0;
    } else if (this.x < -20) {
      this.x = width - this.size;
    }
  }

  controller() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }

  setStart() {
    this.x = width / 2 - this.size / 2;
    this.y = height - this.size - 2;
  }

  health() {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(width / 2, height / 13, this.hp * 5, 30);
  }
}

class Score {
  constructor() {
    this.count = 0;
  }

  render() {
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.count, width / 2, height / 20);

    if (box.hp == 0) {
      this.count = "you Die";
      push();
    }
  }
}

class Rain {
  constructor() {
    this.x = random(10, width - 10);
    this.y = -100;
    this.w = 5;
    this.h = 30;
    this.m = this.h / this.w;
  }

  render() {
    this.update();
    fill(5, 164, 250);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.y += this.m;

    if (this.y > height + this.h) {
      this.x = random(10, width - 10);
      this.y = -200;
    }

    if (box.y < this.y + this.h + 10) {
      if (box.hp != 0) {
        if (box.x < this.x && box.x + box.size > this.x + this.w) {
          this.stop();
          score.count -= 5;
        } else {
          if (this.y > height) {
            score.count += 1;
          }
        }
      }
    }
  }

  stop() {
    this.x = random(10, width - 10);
    this.y = -100;
    box.hp -= 20;
  }
}
