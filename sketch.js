var fixedRect, movingRect;
var o1, o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(200,100,50,50);
  o2 = createSprite(300,100,50,50);
  o1.shapeColor="orange";
  o2.shapeColor="blue";
  o1.debug = true;
  o2.debug = true;
}

function draw() {
  background(0,0,0); 
  if(isTouching(movingRect,o1)){
    textSize(50);
    fill("white");

    text("It Is Touching",500,500)
  }
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
}

function isTouching(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
   return true;
}
else {
  return false;
}
}