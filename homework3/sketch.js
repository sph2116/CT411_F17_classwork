var state = 1;

function setup(){
    
    createCanvas(900, 900);
}

function draw(){
    background(255);
           
   


//HAPPY FACE
    if (state ==1 ){
        background(255,193,9);
        noFill();
    
         //BACKGROUND

         
//SMILE
        strokeWeight(20);
    stroke('#4F03C0');  
        arc(450, 400, 350, 250, 0, PI);
        
//CHEEKS
        noStroke();
        fill(200,15,100,50);
        ellipse(250,270,100,100);

        ellipse(650,270,100,100);
           
//EYES
        strokeWeight(10);
        noFill();
        stroke('#4F03C0');
     
        arc(250, 175, 75, 75, -PI, 0);
        arc(650, 175, 75, 75, -PI, 0);
        

        
//TEXT
        noStroke();
        fill('#BE94C4');
        text('HAPPY!', mouseX,mouseY, 300,300);
        textFont('Helvetica',32);
  
        if(mouseX < 400 && mouseY<400){
             
        fill(0);
        textSize(75);
      
    } else if(mouseX >=400 && mouseY<400){
        fill(0);
        
        textSize(100);
         
    } else if (mouseX <400 && mouseY>=400){
        
        textSize(150);
    }else if (mouseX >=400 && mouseY>=400){
          
        textSize(200);}


 
        
//SLEEPY FACE

    } else if (state==2){
        
        
          background(37,41,109);
        noFill();
        
              //SMILE
        strokeWeight(10);
        stroke('#876DC6');  
        arc(450, 400, 350, 50, 0, PI);
        
        //CHEEKS
        noStroke();
        fill(200,15,100,50);
        ellipse(270,270,100,100);

        ellipse(650,270,100,100);
           
        //EYES
        strokeWeight(10);
        noFill();
        stroke('#876DC6');
     
        arc(250, 150, 75, 75, 0, PI);
        arc(650, 150, 75, 75, 0, PI);
        
                
//TEXT
        noStroke();
        fill(101,163,229);
        text('SLEEPY!', mouseX,mouseY, 300,300);
        textFont('Helvetica',32);
  
        if(mouseX < 400 && mouseY<400){
             
        fill(0);
        textSize(75);
      
    } else if(mouseX >=400 && mouseY<400){
        fill(0);
        
        textSize(100);
         
    } else if (mouseX <400 && mouseY>=400){
        
        textSize(150);
    }else if (mouseX >=400 && mouseY>=400){
          
        textSize(200);}
       
//SCARED FACE        
        
    } else {
        
        
           background(226,85,30);
        noFill();
        
              //SMILE
        noStroke();
        fill('#0B126B');
        ellipse(450,400,125,125);
    
        //CHEEKS
        noStroke();
        fill(223,0,89,100);
        ellipse(270,270,100,100);

        ellipse(650,270,100,100);
           
        //EYES
        strokeWeight(10);
        noFill();
        stroke(0);
     
        //EYEBALL
        stroke('#0B126B');
        strokeWeight(6)
        ellipse(250,150,100,100);
        
        //IRIS
        noStroke();
        fill('#0B126B');
        ellipse(250,150,50,50);
        
        
        //EYEBALL R
        stroke('#0B126B');
        strokeWeight(6);
        noFill();
        ellipse(650,150,100,100);
        
        //IRIS R
           noStroke();
        fill('#0B126B');
        ellipse(650,150,50,50);
        
        
        
       noStroke();
        fill('#2E0E4F');
        text('SCARY!', mouseX,mouseY, 300,300);
        textFont('Helvetica',32);
  
        if(mouseX < 400 && mouseY<400){
             
        fill(0);
        textSize(75);
      
    } else if(mouseX >=400 && mouseY<400){
        fill(0);
        
        textSize(100);
         
    } else if (mouseX <400 && mouseY>=400){
        
        textSize(150);
    }else if (mouseX >=400 && mouseY>=400){
          
        textSize(200);}
       
        
        
        
        
    }
    

}

function mousePressed(){
    if(state < 3){//State can go up to 3 else it resets to 1 to get a pink 
    state = state + 1;
    } else{
        
        state = 1;    
    }
}
    