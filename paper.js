class Paper {
    constructor(x,y,width,height){

     var body1={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density: 1.2
     }

     this.body=Bodies.rectangle(x,y,width,height,body1);
     World.add(world,this.body);
    }
    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode=(CENTER);
        fill(255);
        rect(0,0,this.width,this.hight);
        pop();
    }

};

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
       Matter.Body.applyForce(Paper.body,Paper.body.pos,{x:85,y:-85});
     }
   }