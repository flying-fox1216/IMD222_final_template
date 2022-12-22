class Ground extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.body.isStatic = true;
  }

  show() {
    const Gpos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(Gpos.x, Gpos.y);
    rotate(angle);
    noStroke();
    fill("#00540a");
    rectMode(CENTER);
    // rect(this.x, this.y, this.w, this.h);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
