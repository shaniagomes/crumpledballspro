class Dustbin {
  constructor(x, y) {
    var options = {
        isStatic: true,
        
    }
    this.width = 200;
    this.height = 213;
    this.thickness=20;
    this.bottom = Bodies.rectangle(x, y,this.width,this.thickness, options);
    this.left=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options)
    this.right=Bodies.rectangle(x+this.width/2,y+this.height/2,this.thickness,this.height,options)
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.bottom);
    World.add(world, this.left);
    World.add(world, this.right);
  }
  display(){
    var pos1 = this.bottom.position;
    var pos2 = this.left.position;
    var pos3 = this.right.position;
   push();
   translate(pos2.x,pos2.y)
    rectMode(CENTER);
    angleMode(RADIANS)
    fill(255)
    rotate(this.angle)
    pop();

    push();
   translate(pos1.x,pos1.y)
    rectMode(CENTER);
    angleMode(RADIANS)
    fill(255)
    rotate(1*this.angle)
    pop();

    push();
   translate(pos3.x,pos3.y)
    rectMode(CENTER);
    angleMode(RADIANS)
    fill(255)

    imageMode(CENTER);
    image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
    pop();
  }
};