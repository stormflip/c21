var movingRect,fixedRect
gameObject1,gameObject2,gameObject3,gameObject4


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect = createSprite (200,200,50,50);
  fixedRect.shapeColour = "green";
  fixedRect.debug = true
  
  movingRect = createSprite (200,300,50,50);
  movingRect.shapeColour = "green";
  movingRect.debug = true

  gameObject1 = createSprite(100,200,50,50);
  gameObject1.shapeColor = "Red";

  gameObject2 = createSprite(200,200,50,50);
  gameObject2.shapeColor = "Black";

  gameObject3 = createSprite(300,200,50,50);
  gameObject3.shapeColor = "Blue";

  gameObject4 = createSprite(400,200,50,50);
  gameObject4.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if( isTouching (movingRect,gameObject1)){
    movingRect.shapeColor =  "Yellow";
    gameObject1.shapeColor = "Yellow";
  }
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}
function isTouching (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else{
  return false;
}
}