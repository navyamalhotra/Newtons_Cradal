const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1536,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground2(768,200,400,40);

    box1 = new Box(620,600,75,75);
    box2 = new Box(695,600,75,75);

    box3 = new Box(770,600,75,75);
    box4 = new Box(845,600,75,75);

    box5 = new Box(920,600,75,75);
    
    rope1 = new rope(box1.body,{x:620,y:200});
    rope2 = new rope(box2.body,{x:695,y:200});
   
    rope3 = new rope(box3.body,{x:770,y:200});
    rope4 = new rope(box4.body,{x:845,y:200});

    rope5 = new rope(box5.body,{x:920,y:200});
 

}  

function draw(){
    background("Black");
    Engine.update(engine);

    ground.display();
    
    box1.display();
    box2.display();

    box3.display();
    box4.display();

    box5.display();

    rope1.display();
    rope2.display();

    rope3.display();
    rope4.display();

    rope5.display();


   
   
}
function keyPressed() {
    if(keyCode === UP_ARROW){
       Matter.Body.applyForce(box1.body,box1.body.position,{x:-200,y:-200});
    }
}

