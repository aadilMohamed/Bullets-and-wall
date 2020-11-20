var bullet
var wall
var speed,thickness,weight

function setup() {
  createCanvas(1600,400);
bullet = createSprite(100,200,40,30)
wall = createSprite(1500,200,50,300)
speed = random(223,321)
bullet.velocityX = speed;
thickness = random(20,83) 
weight = random(30,52)
bullet.shapeColor = color("black")
}

function draw() {
  background(255,255,255);
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = 0.5*(speed*weight*speed/(thickness*thickness*thickness));
  if(damage>10){
    wall.shapeColor=color("red");
  }
  if(damage<10){
    wall.shapeColor=color("green");
  }
}
bullet.depth = wall.depth+1
  drawSprites();
}

function hasCollided(Bullet,Wall){
BulletRightEdge = Bullet.x+ Bullet.width;
WallLeftEdge = Wall.x
if(BulletRightEdge>WallLeftEdge){
  return true
}
return false
}
