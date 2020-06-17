class Ground {
    constructor(x, y, width, height) {
        var options = {
            'friction':0.5,
            'density':1.0,
            'isStatic':true
            
        }
        this.ground = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.ground);
    }

    display(){
        var grow = this.ground.position;
        rectMode(CENTER);
        fill(100);
        rect(grow.x, grow.y, this.width, this.height);
    }
}

