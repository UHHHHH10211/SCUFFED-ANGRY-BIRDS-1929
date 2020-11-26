class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 12,
        }

        this.sling1=loadImage('sprite/sling1.png');
        this.sling2=loadImage('sprite/sling2.png');
        this.sling3=loadImage('sprite/sling3.png');
        

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(41,144,196);
            if(pointA.x<220)
            {
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10,pointB.y); 
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x-20,pointA.y-10, 15, 30);
            
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10,pointB.y); 
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10, 15, 30); 
            }
            //strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }



        image(this.sling1,100,50);
        image(this.sling2,120,50);
        image(this.sling3, 140, 50)
    }


    
}