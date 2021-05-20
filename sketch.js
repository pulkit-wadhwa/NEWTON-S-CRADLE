
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var celling;
var bob1,bob2,bob3,bob4,bob5;
var bobDiameter=40;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1355, 625);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	celling= new Ground(675,100,375,50);

	bob1= new Bob(675,400,20);
	bob2= new Bob(615,400,20);
	bob3= new Bob(555,400,20);
	bob4= new Bob(735,400,20);
	bob5= new Bob(795,400,20);

	rope1=new Rope(bob1.body,celling.body,-bobDiameter*0,0);

	rope2=new Rope(bob2.body,celling.body,-bobDiameter*1,0);

	rope3=new Rope(bob3.body,celling.body,-bobDiameter*2,0);

	rope4=new Rope(bob4.body,celling.body,-bobDiameter*-1,0);

	rope5=new Rope(bob5.body,celling.body,-bobDiameter*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  celling.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}
function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45})
	}
}