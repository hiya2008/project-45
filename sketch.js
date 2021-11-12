var balloon , balloon_img ; 
var bg , bg_img ; 
var Bground ;
var Tground ;

function preload(){
  bg_img = loadImage("assets/bg.png");
  balloon_img = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup (){
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-30,displayHeight/2-50,1,1);
  bg.addImage(bg_img)

  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloon_img);
  balloon.scale = 0.2 ;

  Bground = createSprite(200,390,800,20);
  Bground.visible = false ; 

  Tground = createSprite(200,10,800,20);
  Tground.visible = false ;

}

function draw (){

if(keyDown("space")){
  balloon.velocityY = -5
}
 balloon.velocityY = balloon.velocityY+2

  drawSprites();

}