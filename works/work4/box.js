class Box {
  constructor(x, y, w, h) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    // this.x = x;
    // this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    const Boxpos = this.body.position;
    const Boxangle = this.body.angle;
    push();
    translate(Boxpos.x, Boxpos.y);
    rotate(Boxangle);
    noStroke();
    fill("#3aaa47");
    rectMode(CENTER);
    // rect(this.x, this.y, this.w, this.h);
    rect(0, 0, this.w, this.h);
    pop();

    noStroke();
    fill(255);
    circle(Boxpos.x + 20, Boxpos.y, this.w / 5);
    circle(Boxpos.x - 20, Boxpos.y, this.w / 5);
    //iris
    let xc = constrain(
      mouseX,
      Boxpos.x + 20 - this.w / 50,
      Boxpos.x + 20 + this.w / 50
    );
    let xs = constrain(mouseY, Boxpos.y - this.w / 75, Boxpos.y + this.w / 75);
    fill(0);
    circle(xc, xs, this.w / 10);
    let xc2 = constrain(
      mouseX,
      Boxpos.x - 20 - this.w / 50,
      Boxpos.x - 20 + this.w / 50
    );
    let xs2 = constrain(mouseY, Boxpos.y - this.w / 75, Boxpos.y + this.w / 75);
    fill(0);
    circle(xc2, xs2, this.w / 10);
    //glare
    fill(255);
    circle(xc + this.w / 90, xs - this.w / 90, this.w / 50);
    circle(xc2 + this.w / 90, xs2 - this.w / 90, this.w / 50);
  }
}
