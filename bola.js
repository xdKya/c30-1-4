class Bola {
  constructor(x, y) {
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, { isStatic: true });
    World.add(world, this.body);
    this.image = loadImage("assets/cannonball.png");
  }

  show() {
    var pos = this.body.position;

    push();
    imageMode(CENTER);
    // image(imagem,x,y,largura,altura);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
  atirar() {
    //pegando o angulo do canhao
    var angle = canhao.angle - 30;
    angle = angle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(angle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
  }
}
