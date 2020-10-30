var car,wall;
var speed;

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,50,200);
  speed = car.velocityX;
  car.velocityX = random(15,40)
  wall.shapeColor = color("teal")
}

function draw() {
  background(0,0,0);
  car.debug = true;
  wall.debug = true;
  var deformation = 0.5*speed*speed/22509;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    
    if(deformation>180){
      car.shapeColor = color("red");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color("yellow");
    }
    if(deformation>100){
      car.shapeColor = color("green");
    }
  }
  drawSprites();
}