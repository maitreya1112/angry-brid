class Bird{
    constructor(x,y){
        var option={
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        this.body=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body)
        this.width=50;
        this.height=50;
    }
    display(){
        var angle=this.body.angle
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("orange");
        rect(0,0,this.width,this.height);
        pop();
    }
}