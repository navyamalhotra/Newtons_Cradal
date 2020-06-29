class Box {
  constructor(x, y, r) {
    var options = {
     
      isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
    }
  this.r = r;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, this.r/2, options);
    
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    noStroke();
    fill(255);
   ellipse(pos.x,pos.y,this.r,this.r);
    pop();
  }
};
