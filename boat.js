class Boat{
    constructor(x,y,width,height,boatpos){
    var option={
        restitution:0.8,
        friction:1,
        density:1
    }
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width;
    this.height=height;
    this.boatpos=boatpos;
    this.image=loadImage("assets/boat.png")
    World .add(world,this.body)

}
display(){
    var angle=this.body.angle;
    var pos=this.body.position
    push ();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image (this.image,0,this.boatpos,this.width,this.height)
    pop ()
}

}