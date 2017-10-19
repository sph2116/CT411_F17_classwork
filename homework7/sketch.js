var boing = {
    x: 160,
    y: 150,
    loc: 0,
    size:150
};

var horn = {
    x: 372,
    y: 150,
    loc: 0,
    size:150
};

var computer = {
    x: 160,
    y: 348,
    loc  : 0,
    sizeX:358,
    sizeY:93
};

var slider = {
    
    x: 618,
    y: 150,
    loc: 0,
    sizeX:16,
    sizeY:297
    
};

var ladder = {
    
    x: 595,
    y: 415,
    loc: 0,
    sizeX:81,
    sizeY: 71
    
};

var soundMachine = {
    
    x: 254,
    y: 50,
    loc: 0,
    sizeX:300,
    sizeY: 47,
    textSize: 40
    
};

var boingSound;
var hornSound;
var computerSound;
var ladderSound;

var ladderSpeed = 0;

function preload(){
    boing.loc = loadImage("boing_button.png");
    horn.loc = loadImage("horn_button.png");
    computer.loc = loadImage("computer_button.png");
    slider.loc = loadImage("slider.png");
    ladder.loc = loadImage("ladder_button.png");
    
    
    boingSound = loadSound("/sound/boing.mp3");
     hornSound = loadSound("/sound/dixie_horn.mp3");
    ladderSound = loadSound("/sound/ladder.mp3");
    computerSound = loadSound("/sound/computer.mp3");
    
    soundMachine.loc = loadFont("FredokaOne-Regular.ttf"); 
}

function setup(){
    
    createCanvas(800,600);
}


function draw(){
    
    background(226, 207,26);
    textFont(soundMachine.loc);
    textSize(soundMachine.textSize);
    fill(101,175,201);
    text("SOUNDMACHINE", soundMachine.x, soundMachine.y, soundMachine.sizeX, soundMachine.sizeY);
    image(boing.loc, boing.x, boing.y, boing.size, boing.size);
    image(horn.loc, horn.x, horn.y, horn.size, horn.size);
    image(computer.loc, computer.x, computer.y, computer.sizeX, computer.sizeY);
    image(slider.loc, slider.x, slider.y);
    
    ladder.y=ladder.y+ladderSpeed;
    image(ladder.loc, ladder.x, ladder.y, ladder.sizeX, ladder.sizeY);
    
}


function mousePressed(){
     if (mouseX > boing.x && mouseX < boing.x + boing.size && mouseY > boing.y && mouseY < boing.y + boing.size){
        boingSound.play();
    }
    
      if (mouseX >  horn.x && mouseX < horn.x + horn.size && mouseY > horn.y && mouseY < horn.y + horn.size){
        hornSound.play();
    }
    
    if (mouseX >  computer.x && mouseX < computer.x + computer.sizeX && mouseY > computer.y && mouseY < computer.y + computer.sizeY){
        computerSound.play();
    }
    
      if (mouseX >  ladder.x && mouseX < ladder.x + ladder.sizeX && mouseY > ladder.y && mouseY < ladder.y + ladder.sizeY){
        ladderSound.play();
          
        if(ladder.y > 150 || ladder.y < 566 ){
            
        ladderSpeed = ladderSpeed*-1;  
    
        }  else{
            
            ladderSpeed = 0;
        }
          
             
    }
    
    
}