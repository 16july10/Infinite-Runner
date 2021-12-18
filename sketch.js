var Girl2,Girl2Img,Girl2_running
var Woods,WoodsImg
var Obstacle,ObstacleImg
var ground


function preload()  {   
Girl2_running = loadAnimation("Girl2.png", "Girl3.png")
WoodsImg = loadImage("woods.png")

ObstacleImg = loadImage("obstacle.png")
}

function setup() {
createCanvas(590,300)

ground = createSprite(200,295,400,20)



Woods = createSprite(590,300)
Woods.addImage(WoodsImg)
Woods.scale = 1.5
Woods.x = 250
Woods.y = 170




Girl2 = createSprite(250,300)
Girl2.addAnimation("running", Girl2_running)
Girl2.scale = 0.2
Girl2.x = 75
Girl2.y = 250

}

function draw() {
background("orange")

if(keyDown("space")&&Girl2.y>=150){
  Girl2.velocityY = -10
}
Girl2.velocityY = Girl2.velocityY+0.5

Woods.velocityX = -4                                                                   
if(Woods.x<205){
  Woods.x = Woods.width/2
}

spawnObstacle()
Girl2.collide(ground)
drawSprites() 
}

function spawnObstacle(){
  if(frameCount%100===0){
    Obstacle = createSprite(250,270)
    Obstacle.addImage("Obstacle", ObstacleImg)
    Obstacle.scale = 0.1  
    Obstacle.velocityX = -4
    Obstacle.lifetime = 65
  }
}