//How would you translate lines 2-4  to JSON?

var rectangle = {
   x:100,
   y:100,
   size:100
};

//HINT: The variable below (line 7) can stay and be used as normal throughout the code (no need to translate this to JSON)
var colR;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    // Commented these variables out because for some reason they kept causing the program to crash
//    var rectTop = rectangle.x;
//    var rectBottom = rectangle.y + rectangle.size;
//    var rectLeft = rectangle.x;
//    var rectRight = rectangle.x + rectangle.size;
}

function draw(){
    background(200);
    
    //How would you translate the variables below to pull values out of JSON above (in lines 23-31)?
    if(mouseX > rectangle.x && mouseX < rectangle.x + rectangle.size && mouseY > rectangle.x && mouseY < rectangle.y + rectangle.size){
        // HINT: Remember, you still have a "colR" variable up there so no need to translate that below (lines 25 and 27)
        colR = 0;   
    }
        else{
        colR = 255;   
    }
        fill(colR, 10, 100);
        // But the variables below do need some help/changing
        rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size);
    
    
    
    
}