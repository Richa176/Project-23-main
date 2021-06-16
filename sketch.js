const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;


// function preload() {
//     ComputerbaseImage = loadImage("./assets/base2.png");
  
//   }

 
function setup() {
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  canvas = createCanvas(windowWidth,windowHeight);
   //Create Player Base and Computer Base Object
  
  // playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  // player = new Player(285, playerBase.body.position.y - 153, 50, 180);

  computerbase = new Computerbase(width - 300,random(450, height - 300),180,150);
  // computer = new Computer(width - 280,computerBase.body.position.y - 153,50,180);
 
 
  }

function draw() {

  background(180);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
  //  computer.display();
   //display Player and computerplayer


}
