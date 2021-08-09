const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, base1, base2, comPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  playerBase=new PlayerBase(300,450,180,150)
  player = new Player(350,playerBase.body.position.y-75,50,180);
  
	computerBase=new ComputerBase(900,450,180,150)
  computer = new Computer(1000,computerBase.body.position.y-75,50,180);
   //Create Player Base and Computer Base Object
  

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
  playerBase.display();
  player.display();
  computerBase.display();
  computer.display();


   //display Player and computerplayer


}
