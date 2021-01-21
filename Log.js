class Log{
    constructor(x,y,height,angle){
        var option={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,20,height,option);
        World.add(world,this.body)
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
    }
    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}