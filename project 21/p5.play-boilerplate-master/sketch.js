var fixedRect,movingRect; 
var anotherRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,100,80,30);
  movingRect.shapeColor = "green";
  anotherRect =createSprite(300,100,80,30);
  anotherRect.shapeColor="blue";
  
  movingRect.debug = true;

  anotherRect.debug=true;
  
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  


  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
  else if(isTouching(movingRect,anotherRect)){
    movingRect.shapeColor="cyan";
    anotherRect.shapeColor="cyan";
  }
  else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
    anotherRect.shapeColor="blue";
  }
  
  drawSprites();
}

function isTouching(a,b){
  if (a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 + b.width/2  && a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < a.height/2 + b.height/2  ){
    return true

  }
  else {
    return false
  }
}