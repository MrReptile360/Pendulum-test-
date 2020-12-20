
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine, world;
var Bob, slingShot;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	Roof1= new Roof(400,100,600,20);
	bob1= new bob(400,250,20,20);
	slingshot1= new SlingShot(bob1.body,Roof1.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Roof1.display();
  bob1.display();
  slingshot1.display();
  
  drawSprites();
 
}



