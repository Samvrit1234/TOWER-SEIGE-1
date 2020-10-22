const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

}

function setup() {
 // createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 var canvas = createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

  ground = new Ground(400, 200, 50, 50);

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);



}

function draw() {
  background(255,255,255);  

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();



  drawSprites();
}