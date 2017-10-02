var circleDiameter = 500;
var d;
var bgRed = 141;
var bgGreen =153;
var bgBlue=116;
var image1;
var image2;
var font1;
var font2;


function preload(){
    image1 = loadImage("Mona_Lisa.png");
    image2 = loadImage("funny_mona_lisa.png");
    font1 = loadFont("floralia.ttf");
    font2 = loadFont("lightning_bolt.ttf");
}

function setup(){
    
    createCanvas(windowWidth, windowHeight);
 
}

function draw(){
    background(bgRed, bgGreen, bgBlue);
    

//DIST CIRCLE FOR MOUSE    
    fill(0,0,0,0);
    noStroke();
    ellipse(width/2, height/2, circleDiameter, circleDiameter);
    d = dist(width/2, height/2, mouseX, mouseY);
       
//SELFIE MONA LISA    
    
    if(d<circleDiameter/2){
       
        bgRed =255;
        bgGreen = 100;
        bgBlue=150;
        
        fill(166,random(236),19);
        textFont(font2);
        textSize("75");
      
//LIGHTING BOLT PATTERN
    
   for(var font1x = 50; font1x <= width - 50; font1x = font1x + 100){
    
      for(var font1y = 50; font1y <= width - 50; font1y = font1y + 100)
       text("a",font1x,font1y);
   
       
       }//END FOR LOOP
        
         imageMode(CENTER);
        image(image2, width/2,height/2);
        
//REGULAR MONA LISA
        
    }else{
        
         bgRed = 141;
        bgGreen =153;
        bgBlue=116;
         textFont(font1);
        textSize("75");
         fill(80,85,71);

//FLORAL PATTERN  
        
   for(var font1x = -50; font1x <= width; font1x = font1x + 100){
    
      for(var font1y = 50; font1y <= height+150; font1y = font1y + 200)
       text("a",font1x,font1y);
      
    }//END FOR LOOP
        
   for(var font2x = 0; font2x <= width; font2x = font2x + 100){
    
      for(var font2y = 150; font2y <= height+150; font2y = font2y + 200)
       text("a",font2x,font2y);
      
    }//END FOR LOOP
                
        
        
    imageMode(CENTER);
    image(image1, width/2,height/2);
        
        
    }//END ELSE
  
    
}//END DRAW

 
