class rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //stiffness: 4,
            length: 450
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
       
    

    display(){
        
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
      stroke(255,255,255);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    
}