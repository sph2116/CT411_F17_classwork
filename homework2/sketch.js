
function setup(){
    createCanvas(800, 800);
    
}

function draw(){
    background(229,211,215);

    
    for(var x = 75; x <= width; x += 125){
        
    for(var y = 75; y <= height; y += 125){
        
       
        strokeWeight(5);
        noFill();
        stroke(185,150,231);
        ellipse(x,y,100,100);
        stroke(225,150,255);
        ellipse(x,y, 75, 75);
        noStroke();
        fill(random(185),150,random(231));
        ellipse(x,y, 50, 50);
    
            for(var squareX = x + 62.5; squareX <= width; squareX += 125){
                for(var squareY = y + 62.5; squareY <= height; squareY += 125){
                    noStroke();
                    fill(random(160), 228, random(200));
                rect(squareX, squareY, 10, 10);

                }    
            }
      
        }
     }

    


}