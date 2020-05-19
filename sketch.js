var bullet , wall ;
var speed,weight;
var thickness;
var damage=0;

function setup() {
  createCanvas(1400,400);
 bullet= createSprite(10, 200, 50, 50);
 wall=createSprite(1200,200,thickness,200);
  weight=random(30,52);
  speed=random(223,321);
}

function draw() {

  background(100,155,255);  

  bullet.velocityX=random(5,9);
  thickness=random(22,83);
  damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  
  if (bullet.isTouching(wall)){
    bullet.bounceOff(wall);
    bullet.velocityX=0;
  }
  
    if(damage<=10){
   
    wall.shapeColor='green';
    }
     
  
    
   if(damage>10){
   
    wall.shapeColor='red';
    }
  

  drawSprites();
}