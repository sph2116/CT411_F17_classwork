var circleDiameter = 500;
var d;
var bgRed = 141;
var bgGreen =153;
var bgBlue=116;
var image1;
var image2;
var font1;
var font2;
var imageX = 0;
var imageSpeed = 3;
var rectSize = 30;
var rectY = 25;
var rectX = 50;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX +rectSize;
var isPressed = false;
var theFont;
var theSize = 55;
var theFillR = 80;
var theFillG = 85;
var theFillB = 71;
var theImage;
var theButton;

function preload(){
    image1 = loadImage("Mona_Lisa.png");
    image2 = loadImage("funny_mona_lisa.png");
    font1 = loadFont("floralia.ttf");
    font2 = loadFont("lightning_bolt.ttf");
    theButton = loadImage("photo-camera.png");
    theFont = font1;
    theImage = image1;
}

function setup(){
    
    createCanvas(windowWidth, windowHeight);
 
}


function draw(){
    
//square button
background(bgRed, bgGreen, bgBlue); 
    
  
rect(rectX, rectY, rectSize, rectSize);
image(theButton, rectX+12,rectY+rectY/2);  

    
textSize(theSize);    
textFont(theFont);
fill(theFillR, theFillG, theFillB);    

    
//BACKGROUND PATTERN
for(var font1x = 50; font1x <= width - 50; font1x = font1x + 100){
    
      for(var font1y = 100; font1y <= height - 50; font1y = font1y + 100)
       text("a",font1x,font1y);
   
       
       }//END FOR LOOP
    
    noStroke();
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        
        fill(255,255,50);
    } 
    
    
    rect(rectX, rectY, rectSize, rectSize);
    image(theButton, rectX+15,rectY+rectY/2+3);  
    
    
    
    
    imageMode(CENTER);
    image(theImage, width/2,height/2);
    
}//END DRAW

function mousePressed(){

if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && isPressed == true){   
        bgRed = 141;
        bgGreen =153;
        bgBlue=116;
    
    theFillR = 80;
    theFillG = 85;
    theFillB = 71;
    
   theSize = 55;    
    theFont = font1;
    theImage = image1;
        
  
    isPressed = !isPressed;}//end if
  
else if (mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && isPressed == false){   


       bgRed =255;
        bgGreen = 100;
        bgBlue=150;
    
        theFillR = 166;
    theFillG = 236;
    theFillB = 19;
    
    theSize = 75;
    theFont = font2;
     theImage = image2;
    isPressed = !isPressed;
    
} //END IF   
    
    
} 



////    }//END ELSE
//    
//    
//}