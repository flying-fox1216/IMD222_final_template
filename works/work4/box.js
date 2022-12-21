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
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill("#3aaa47");
    rectMode(CENTER);
    // rect(this.x, this.y, this.w, this.h);
    rect(0, 0, this.w, this.h);
    pop();

    noStroke();
    fill(255);
    circle(pos.x + 20, pos.y, this.w / 5);
    circle(pos.x - 20, pos.y, this.w / 5);
    //iris
    let xc = constrain(
      mouseX,
      pos.x + 20 - this.w / 50,
      pos.x + 20 + this.w / 50
    );
    let xs = constrain(mouseY, pos.y - this.w / 75, pos.y + this.w / 75);
    fill(0);
    circle(xc, xs, this.w / 10);
    let xc2 = constrain(
      mouseX,
      pos.x - 20 - this.w / 50,
      pos.x - 20 + this.w / 50
    );
    let xs2 = constrain(mouseY, pos.y - this.w / 75, pos.y + this.w / 75);
    fill(0);
    circle(xc2, xs2, this.w / 10);
    //glare
    fill(255);
    circle(xc + this.w / 90, xs - this.w / 90, this.w / 50);
    circle(xc2 + this.w / 90, xs2 - this.w / 90, this.w / 50);
  }
}
// let LeyeW = 2.8;
// let ReyeW = 1.55;
// let eyeH = 1.25;
// let eyeS = 7;
// function draw() {
//   noStroke();
//   fill(255);
//   circle(width / LeyeW, height / eyeH, width / 7);
//   circle(width / ReyeW, height / eyeH, width / 7);
//   //iris
//   let xc = constrain(
//     mouseX,
//     width / LeyeW - width / 50,
//     width / LeyeW + width / 50
//   );
//   let xs = constrain(
//     mouseY,
//     height / eyeH - width / 75,
//     height / eyeH + width / 75
//   );
//   fill(0);
//   circle(xc, xs, width / 15);
//   let xc2 = constrain(
//     mouseX,
//     width / ReyeW - width / 50,
//     width / ReyeW + width / 50
//   );
//   let xs2 = constrain(
//     mouseY,
//     height / eyeH - width / 75,
//     height / eyeH + width / 75
//   );
//   fill(0);
//   circle(xc2, xs2, width / 15);
//   //glare
//   fill(255);
//   circle(xc + width / 90, xs - width / 90, width / 70);
//   circle(xc2 + width / 90, xs2 - width / 90, width / 70);
// }
