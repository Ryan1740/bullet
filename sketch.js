var bullet, wall;
var speed,weight,thickness  ;

function setup() {
  createCanvas(1600,400);
  speed=random(230,321);
  weight=random(30,52);
  bullet=createSprite(50,200,20,50);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage>10) {
      bullet.shapeColor="red";
    }
    if(damage<10 && deformation>100) {
      bullet.shapeColor="green";
    }
  }
  drawSprites();
}