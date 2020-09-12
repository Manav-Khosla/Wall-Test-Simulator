var thickness, wall;
var speed, weight, bullet;

function setup() {
  createCanvas(1600,400);

  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  bullet = createSprite(50, 200, 40, 10);
  wall=createSprite(windowWidth-20, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(50, 50, 50);
  bullet.velocityX=speed;
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255, 0, 0);
      textSize(50);
      text("The wall is not effective", 1600/3, 400/3);
      textSize(36);
    } 
    
    else if(damage<=10){
      wall.shapeColor=color(0, 255, 0);
      textSize(50);
      text("The wall is effective", 1600/3, 400/3);
    }
  }

  drawSprites();
}