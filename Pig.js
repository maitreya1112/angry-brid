class Pig{
    constructor(x,y){
        var option={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body)
        
    }
    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}