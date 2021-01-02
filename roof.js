class roof {
    constructor(x, y){
        var options=
        {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, 300,40,options)
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y,300,40);
    }
}