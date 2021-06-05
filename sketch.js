const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;
var snow=[];

function preload(){
  bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  if(frameCount%60===0){
    snow.push(new Snow(random(30,770),0,random(30,60),random(30,60)))
  }
  for(var j=0;j<snow.length;j++){
    snow[j].display();
  }
}