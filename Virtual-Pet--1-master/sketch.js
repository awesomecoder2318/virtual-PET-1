var dog, happydog, foodA, foodStock
var dogimg, happydogimg, database
function preload()
{
  dogimg = loadImage("images/dogImg.png")
  happydogimg = loadImage("images/dogImg1.png")

}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

  dog = createSprite(250,250,10,10)
  dog.addImage(dogimg)
  dog.scale = 0.5

  foodStock = database.ref('Food');
  foodStock.on('value', readStock);
  textSize(20)
}


function draw() { 
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodA)
    dog.addImage(happydogimg)
    } 

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodA,170,200);
  textSize(13);
  text("Note: Press UP_ARROW To Feed Doggo Treats!",130,10,300,20);
  
}


function readStock(data){
foodA = data.val()
}
function writeStock(x){

if(x<=0){
x=0
}
else{
x = x-1
}

database.ref('/').update({
  Food:x
})

}
