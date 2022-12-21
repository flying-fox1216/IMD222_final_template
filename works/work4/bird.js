class Bird {
  constructor(x, y, r) {
    let options = {
      restitution: 0.8,
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.World.add(world, this.body);
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(img, 0, 0, this.r * 2, this.r * 2);
    pop();
    // fill(255);
    // circle(this.x, this.y, this.r);
  }
}
