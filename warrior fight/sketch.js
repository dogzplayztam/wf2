const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var stage,stageimg;
var steve,steveimg;
var alex,aleximg;
var idle;
var stone,stonei
function preload()
{
  idle = loadAnimation("idle.png");
  stageimg = loadImage("bg.jpg");
  steveimg = loadAnimation("n1.png","n2.png","n3.png","n4.png","n5.png","n6.png");
  aleximg = loadImage("alex.png");
  stonei = loadImage("stone.png");
}

function setup() {
  createCanvas(1000,600);
  frameRate(80);
  stoneGroup = new Group()
  engine = Engine.create();
  world = engine.world;

  stage = createSprite(500,300,1000,600)
  stage.addImage("stageimg",stageimg)
  stage.scale = 1.7;

  steve = createSprite(975,475,10,100)
  steve.addAnimation("idle",idle)
  steve.addAnimation("steveimg",steveimg)
  steve.scale = 0.4;

 
  //alex = createSprite(900,475,10,100)
 //alex.addImage(aleximg)
  //alex.scale = 0.3;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  stones()
  if (keyWentDown("LEFT_ARROW")){
    steve.changeAnimation("steveimg",steveimg)
    stage.velocityX = -5
    stone.setVelocityXEach()
  }
  if (keyWentUp("LEFT_ARROW")){
    steve.changeAnimation("idle",idle)
    stage.velocityX = 0
    
  }
  
  if(stage.x>0){
    stage.x = 500
  }
  
   drawSprites();
}

function stones(){
  if(frameCount%50===0){
    stone = createSprite(0,590,10,100)
    stone.addImage("stonei",stonei)
    stone.scale = 0.4;
  // stone.velocityX=5;
   stoneGroup.add(stone);
  }
  }

