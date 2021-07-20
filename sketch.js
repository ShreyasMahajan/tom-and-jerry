var bg,bgimg;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(860, 600);
    cat.addAnimation("catS", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseS", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgimg);

 

    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLImage");
        mouse.addAnimation("mouseLImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLImage");
    }  

    drawSprites();
}
    



function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catR", catImg2);
        cat.changeAnimation("catR");
        
        mouse.addAnimation("mouseT", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseT");
    }
}
