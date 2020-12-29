
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperImage;
var ground;
var box1; 
var box2;
var box3;
var dustbinObj;
var dustbinI

function preload()
{
  dustbinI=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
	//Create the Bodies Here.
    paper= new Paper(200,200,40,40) 
   ground= new Ground(200,700,2000,20) 
   box1= new Box(600,640,20,100);
   box2 = new Box(670,640,20,100)
   box3 = new Box(630,680,50,20)
   dustbinObj=createSprite(640,610,0.01,0.01)
   dustbinObj.addImage("dustbin",dustbinI);
   dustbinObj.scale=0.5;
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  dustbinObj.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW)
  Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-90});
}


