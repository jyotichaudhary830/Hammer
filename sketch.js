var hammer;
var stone;
var rubber;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,300,60,20);
	ground = new Ground(600,height,1200,20);
	stone = new Stone(200,580,50,50);
	rubber = new Rubber(300,580,60,60);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}



