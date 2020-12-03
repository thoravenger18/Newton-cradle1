
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var hanger1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball1 = new Ball(300,200,50,50);
	ball2 = new Ball(350,200,50,50);
	ball3 = new Ball(400,200,50,50);
	ball4 = new Ball(450,200,50,50);
	ball5 = new Ball(500,200,50,50);
	rope1 = new Rope(ball1.body,{x:300 , y:50});
	rope2 = new Rope(ball2.body,{x:350 , y:50})
	rope3 = new Rope(ball3.body,{x:400 , y:50})
	rope4 = new Rope(ball4.body,{x:450 , y:50})
	rope5 = new Rope(ball5.body,{x:500 , y:50})
	hanger1 = new Hanger(400,50,250,30);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  hanger1.display();
}

function mouseDragged() {
	Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
	}



