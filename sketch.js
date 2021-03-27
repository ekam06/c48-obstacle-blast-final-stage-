const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
var time=120
var edges
var gameState=1
function preload(){

heartI=loadImage("h.png")

pillarI=loadImage("g.png")

npc1i=loadImage("m1I.png")
npc2i=loadImage("m2I.png")
npc3i=loadImage("m3I.png")

fruit1I=loadImage("f1I.png")
fruit2I=loadImage("f2I.png")
fruit3I=loadImage("f3I.png")

}
function setup(){

createCanvas(1550,700)

edges=createEdgeSprites()

obstacleGroup=new Group()
heartGroup=new Group()
npcGroup=new Group()
memoryCardGroup=new Group()

o1=createSprite(100,0,20,800)
o1.shapeColor=("red")

o2=createSprite(200,600,30,400)
o2.shapeColor=("yellow")

o3=createSprite(150,70,100,30)
o3.shapeColor=("pink")

o4=createSprite(130,580,110,20)
o4.shapeColor=("orange")

o5=createSprite(10,500,110,20)
o5.shapeColor=("grey")

o6=createSprite(140,290,230,30)
o6.shapeColor=("purple")

o7=createSprite(390,280,30,220)
o7.shapeColor=("blue")

o8=createSprite(370,540,170,20)
o8.shapeColor=("white")

o9=createSprite(380,90,20,120)
o9.shapeColor=("pink")

o10=createSprite(400,510,10,180)
o10.shapeColor=("lightGreen")

o11=createSprite(270,620,110,20)
o11.shapeColor=("lightBlue")

o12=createSprite(285,420,20,120)
o12.shapeColor=("white")

o13=createSprite(240,190,120,15)
o13.shapeColor=("red")

o14=createSprite(290,80,10,120)
o14.shapeColor=("lightBlue")

o15=createSprite(200,185,10,80)
o15.shapeColor=("red")

o16=createSprite(440,620,10,80)
o16.shapeColor=("green")

obstacleGroup.add(o1)
obstacleGroup.add(o2)
obstacleGroup.add(o3)
obstacleGroup.add(o4)
obstacleGroup.add(o5)
obstacleGroup.add(o6)
obstacleGroup.add(o7)
obstacleGroup.add(o8)
obstacleGroup.add(o9)
obstacleGroup.add(o10)
obstacleGroup.add(o11)
obstacleGroup.add(o12)
obstacleGroup.add(o13)
obstacleGroup.add(o14)
obstacleGroup.add(o15)
obstacleGroup.add(o16)


m1=createSprite(600,200,100,150)
m1.shapeColor=("white")
m1S=createSprite(600,191,20,20)
m1S.addImage(fruit1I)
m1S.scale=0.1
m2=createSprite(750,200,100,150)
m2.shapeColor=("white")
m2S=createSprite(750,191,20,20)
m2S.addImage(fruit2I)
m2S.scale=0.15
m3=createSprite(900,200,100,150)
m3.shapeColor=("white")
m3S=createSprite(900,191,20,20)
m3S.addImage(fruit3I)
m3S.scale=0.05
m4=createSprite(600,400,100,150)
m4.shapeColor=("white")
m4S=createSprite(600,400,20,20)
m4S.addImage(fruit2I)
m4S.scale=0.15
m5=createSprite(750,400,100,150)
m5.shapeColor=("white")
m5S=createSprite(750,400,20,20)
m5S.addImage(fruit3I)
m5S.scale=0.05
m6=createSprite(900,400,100,150)
m6.shapeColor=("white")
m6S=createSprite(900,400,20,20)
m6S.addImage(fruit1I)
m6S.scale=0.1

memoryCardGroup.add(m1S)
memoryCardGroup.add(m2S)
memoryCardGroup.add(m3S)
memoryCardGroup.add(m4S)
memoryCardGroup.add(m5S)
memoryCardGroup.add(m6S)

p1=createSprite(1035,200,50,400)
p1.velocityY=-12
p1.addImage(pillarI)
p1.scale=0.15
//p1.getScaledHeight(0.15)
//p1.getScaledWidth(0.15)
p2=createSprite(1145,600,50,300)
p2.velocityY=8
p2.addImage(pillarI)
p2.scale=0.15
p3=createSprite(1265,200,50,400)
p3.velocityY=-8
p3.addImage(pillarI)
p3.scale=0.15
p4=createSprite(1375, 600,50,500)
p4.velocityY=10
p4.addImage(pillarI)
p4.scale=0.15

pc=createSprite(20,640,20,20)
pc.shapeColor=("white")

npc1=createSprite(100,30,20,20)
npc1.addImage(npc1i)
npc1.scale=0.02
npc1.velocityX=2
npc1.velocityY=-3

npc2=createSprite(260,550,20,20)
npc2.addImage(npc2i)
npc2.scale=0.01
npc2.velocityX=2
npc2.velocityY=-3


npc3=createSprite(285,230,20,20)
npc3.addImage(npc3i)
npc3.scale=0.09
npc3.velocityX=2
npc3.velocityY=3

npcGroup.add(npc1)
npcGroup.add(npc2)
npcGroup.add(npc3)

for (var i=700;i<800;i=i+45){
  heart=createSprite(i,550,20,20)
  heart.addImage(heartI)
  heart.scale=0.015

}
heartGroup.add(heart)
}
function draw(){

  background("black")
  fill ("white")
  text (mouseX+","+mouseY,mouseX,mouseY)

p1.bounceOff(edges)
p2.bounceOff(edges)
p3.bounceOff(edges)
p4.bounceOff(edges)
pc.collide(edges)
pc.collide(obstacleGroup)
npcGroup.bounceOff(edges)
npcGroup.bounceOff(obstacleGroup)

if(keyDown("LEFT_ARROW")){
  pc.x=pc.x-2
}
if(keyDown("RIGHT_ARROW")){
  pc.x=pc.x+2
}
if(keyDown("UP_ARROW")){
  pc.y=pc.y-2
}
if(keyDown("DOWN_ARROW")){
  pc.y=pc.y+2
}
drawSprites()

fill("red")
textFont("Broadway")
textSize(40)
text ('MEMORY CARDS',570,50)

textFont("Segoe Script")
textSize(30)
text ("Lives-",570,560)

textFont("Segoe Script")
textSize(30)
text ("Time Left = " + time +" seconds",570,600)

textFont("Segoe Script")
textSize(25)
text ("START",25,680)

textFont("Segoe Script")
textSize(25)
text ("OVER",1460,40)



if(frameCount%30===0){
  time=time-1
}
if(pc.isTouching(npcGroup)){

}
m1S.visible=false
m2S.visible=false
m3S.visible=false
m4S.visible=false
m5S.visible=false
m6S.visible=false

if(pc.isTouching(memoryCardGroup)){
  memoryCardGroup.visible=true
}


}