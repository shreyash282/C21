var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup()
{
  createCanvas(800,400);

  fixedRect = createSprite(150,200,30,100);
  fixedRect.shapeColor = "blue";
  //fixedRect.velocityX = -5


  movingRect = createSprite(20,100,80,20);
  movingRect.shapeColor = "blue";
  movingRect.velocityX = 5

 gameObject1 = createSprite(200,100,50,50);
 gameObject1.shapeColor = "blue";

 gameObject2 = createSprite(300,100,50,50);
 gameObject2.shapeColor = "blue";

 gameObject3 = createSprite(400,100,50,50);
 gameObject3.shapeColor = "blue";

 gameObject3.velocityX = -7;

 gameObject4 = createSprite(500,100,50,50);
 gameObject4.shapeColor = "blue" }

function draw()
{
  background("pink");
bounceoff(movingRect,gameObject3)

  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,gameObject1))
  {
    movingRect.shapeColor = "yellow"
    gameObject1.shapeColor = "yellow"
  }
  else
  {
    movingRect.shapeColor = "blue"
    gameObject1.shapeColor = "blue"
  } 
  */
  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}

