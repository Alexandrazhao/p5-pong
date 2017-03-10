var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;

var x = 100;
var y = 0;
var face;
var hit=false;







function preload(){
    img1=loadImage("New_P.png");
    img2=loadImage("egg_yolk.png");
    img3=loadImage("New_P.png");
    img4=loadImage("black_heart.png");
    img5=loadImage("black_heart.png");
    img6=loadImage("black_heart.png");
    img7=loadImage("New_P.png");
    img8=loadImage("big_heart.png");
}
function setup() {
    createCanvas(1000,500); 
    
    strokeWeight(0);
    frameRate(5);
    
    
    
    
    
}

function draw() {
   background(0);  
    
    fill(random(0,255),random(100,200),random(100,200))
    rect(0,300,100,20);
    rect(200,random(200,370),60,20);
    rect(310,random(80,150),70,20);
    rect(450,random(360,480),40,20);
    rect(500,random(200,400),90,20);
    rect(600,random(50,150),20,20);
    rect(630,random(20,400),50,20);
    rect(700,random(300,500),90,20);
    rect(800,random(50,380),30,20);
    rect(820,random(160,270),40,20);
    rect(910,random(360,450),30,20);
    rect(950,random(200,400),50,20);
    face(50,50);
    
    hit1 = collideRectCircle(200,random(200,370),60,20,x,y+280,40,50);
    print ("I will give you one more chance!" + hit1);
    if (hit1){
        image (img1,390,400);  
         image (img8,400,100);  
       
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        
    } 
    else if (true){
        image (img4,390,400);
    }
    
    
    
    hit2 = collideRectCircle(310,random(80,150),70,20,x,y+280,40,50);
    if (hit2){
        image (img3,340,400);
        image(img8,400,100);
        
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
    }
    else if(true){
        image (img5,340,400);
        
    }
    
    hit3 = collideRectCircle(450,random(360,480),40,20,x,y+280,40,50);
    if (hit3){
        image (img7,290,400);
        image (img8,400,100);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
    }
     else if(true){
        image (img6,290,400);
    }
    hit4 = collideRectCircle(500,random(200,400),90,20,x,y+280,40,50);
    if (hit4){
        alert("you are kind of good, but...");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
     
    hit5 = collideRectCircle (600,random(50,150),20,20,x,y+280,40,50);
    if (hit5){
        alert("half way died");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
     hit6 = collideRectCircle(630,random(20,400),50,20,x,y+280,40,50);
    if (hit6){
        alert("Good Job, why not keep further?");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
    hit7 =collideRectCircle(700,random(300,500),90,20,x,y+280,40,50);
    if (hit7){
        alert("AHA!");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
    hit8 =collideRectCircle(800,random(50,380),30,20,x,y+280,40,50);
    if (hit8){
        alert("No way!!");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
    hit9 =collideRectCircle(820,random(160,270),40,20,x,y+280,40,50);
    if (hit9){
        alert("you are almost win this game!");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
    hit10 =collideRectCircle(910,random(310,450),30,20,x,y+280,40,50);
    if (hit10){
        alert("Okay, i have noting to day baby.");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
    hit11 =collideRectCircle(950,random(200,400),50,20,x,y+280,40,50);
    if (hit11){
        alert("Dude! What are you doing!");
        image(img2,300,100,400,200);
        fill(255,0,0);
        ellipse(x+15/4,y+270,5,5);
        ellipse(x+25/2,y+270.5,5);
        reset();
    }
    
     
}
 
   

  
function face(){
    
     
     if(keyIsPressed){
        if(keyCode==LEFT_ARROW){
            x = x-6; 
        }
         else if (keyCode == RIGHT_ARROW){
            x = x+6;
         }
         else {loop
              }    
         
    }
    if(keyIsPressed){
        if((key=='w')||(key=='W')){
            y = y-6;
        }
        else if ((key=='s')||(key=='S')){
            y = y+6;
        }
        else{loop}
    
        
    }
     
      
     fill(255,random(100,200),random(20,50));
    ellipse(x,y+280,40,50);
    
    
     fill(0);
    ellipse(x+15/4,y+270,5,5);
    ellipse(x+25/2,y+270.5,5);
    
    triangle(x+random(10,18),y+random(270,285),x+random(23,30),y+random(275,285),x+random(10,30),y+random(275,290));
    
      
  
    
}
