class chain{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        
        this.chains = Constraint.create(options)
        World.add(world, this.chains)
    }

    display(){
        var pointA = this.chains.bodyA.position;
        var pointB = this.chains.bodyB.position;
       
        strokeWeight(5);
        stroke("lightblue");
       
        var rope1X = pointA.x;
        var rope1Y = pointA.y;
       
        var rope2X = pointB.x + this.offsetX;
        var rope2Y = pointB.y + this.offsetY;
        line(rope1X, rope1Y, rope2X, rope2Y); 
        }
    }
