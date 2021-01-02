const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, Roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}


function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	 bob1 = new bob(250, 500, 50);
	 bob2 = new bob(300, 500, 50);
	 bob3 = new bob(350, 500, 50);
	 bob4 = new bob(400, 500, 50);
	 bob5 = new bob(450, 500, 50);

	 Roof = new roof(350, 200);

	 rope1 = new chain(bob1.body,Roof.body,-100,0);
	 rope2 = new chain(bob2.body,Roof.body,-50,0);
	 rope3 = new chain(bob3.body,Roof.body,0,0);
	 rope4 = new chain(bob4.body,Roof.body,50,0);
	 rope5 = new chain(bob5.body,Roof.body,100,0);
	 Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Roof.display();
  
  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	 }
   }
