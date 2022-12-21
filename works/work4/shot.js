class SlingShot {
  constructor(x, y, body) {
    let options = {
      pointA: {
        x: x,
        y: y,
      },
      bodyB: body,
      stiffness: 0.1,
      length: 50,
    };
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyB = null;
  }

  show() {
    if (this.sling.bodyB) {
      stroke(0);
      let posA = this.sling.pointA;
      let posB = this.sling.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }
  attach(body) {
    this.sling.bodyB = body;
  }
}
