const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var dustinobject;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  
  var render = Render.create({ 
    element: document.body, 
    engine: engine, options: {
     width: 1600, height: 700, wireframes: false } })

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);
  ground = new Ground(width/2, 680, 1600, 20);
  dustinobject = new Dustbin(900,650)
  
	Engine.run(engine);
  Render.run(render); 

}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  paper.display();
  ground.display();
 dustinobject.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}