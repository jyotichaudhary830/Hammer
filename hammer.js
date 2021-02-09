class Hammer {
  constructor(x, y, height,angle) {
    var options = {
        'restitution': 0.5,
        'friction': 1.0,
        'density': 2
    };

    this.body = Bodies.rectangle(x, y, 60, height, options);
    this.width = 60;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);

  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("white")
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
  
  }
};
