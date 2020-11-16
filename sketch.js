const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;				

var canvas,engine,world;
var mConstraint;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;

function setup() {
	canvas = createCanvas(windowWidth / 1,windowWidth /2.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}

	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(340, 450, "#000000");
	pendulum2 = new Pendulum(400, 450, "#000000");
	pendulum3 = new Pendulum(460, 450, "#000000");
	pendulum4 = new Pendulum(520, 450, "#000000");
	pendulum5 = new Pendulum(580, 450, "#000000");

	sling1 = new Sling(pendulum1.body, { x: 280, y: 50 });
	sling2 = new Sling(pendulum2.body, { x: 340, y: 50 });
	sling3 = new Sling(pendulum3.body, { x: 400, y: 50 });
	sling4 = new Sling(pendulum4.body, { x: 460, y: 50 });
	sling5 = new Sling(pendulum5.body, { x: 520, y: 50 });

	Engine.run(engine);
  
}


function draw() {
background("grey"); 

 pendulum1.display();
 pendulum2.display();
 pendulum3.display();
 pendulum4.display();
 pendulum5.display();
 sling1.display();
 sling2.display();
 sling3.display();
 sling4.display();
 sling5.display();

}

function mouseDragged (){
	Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}
