class Rubber{
    constructor(x, y, height,angle) {
      var options = {
          'restitution': 0.5,
          'friction': 5.0,
          'density': 1
      };
      this.body = Bodies.rectangle(x, y, 60, height, options);
      this.width = 60;
      this.height = height;
      World.add(world, this.body);
  
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("white")
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  