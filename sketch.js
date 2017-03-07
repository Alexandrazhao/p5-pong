var img1;
var img2;
var x = 100;
var y = 0;
var face;
var hit=false;







function preload(){
    img1=loadImage("G_2.png");
    img2=loadImage("G_3.png")
    
}
function setup() {
    createCanvas(1000,500); 
   
   
    strokeWeight(0);
    frameRate(20);
    
    
    
    
}

function draw() {
   background(0);  
    
    
  image(img1,20,450);
  image(img1,40,450);
    image(img1,60,450);
    image(img1,80,450);
   
    fill(random(0,255),random(150,200),random(0,255))
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
   
    if (hit1){
            alert("you die!");
    }
    hit2 = collideRectCircle(310,random(80,150),70,20,x,y+280,40,50);
    if (hit2){
        alert("you are loser");
    }
    
    hit3 = collideRectCircle(450,random(360,480),40,20,x,y+280,40,50);
    if (hit3){
        alert("you have already passed two sessions! Owwww!")
    }
    hit4 = collideRectCircle(500,random(200,400),90,20,x,y+280,40,50);
    if (hit4){
        alert("you are kind of good, but...")
    }
    hit5 = collideRectCircle (600,random(50,150),20,20,x,y+280,40,50);
    if (hit5){
        alert("half way died")
    }
     hit6 = collideRectCircle(630,random(20,400),50,20,x,y+280,40,50);
    if (hit6){
        alert("Good Job, why not keep further?")
    }
    hit7 =collideRectCircle(700,random(300,500),90,20,x,y+280,40,50);
    if (hit7){
        alert("AHA!")
    }
    hit8 =collideRectCircle(800,random(50,380),30,20,x,y+280,40,50);
    if (hit8){
        alert("No way!!")
    }
    hit9 =collideRectCircle(820,random(160,270),40,20,x,y+280,40,50);
    if (hit9){
        alert("you are almost win this game!")
    }
    hit10 =collideRectCircle(910,random(310,450),30,20,x,y+280,40,50);
    if (hit10){
        alert("Okay, i have noting to day baby.")
    }
    hit11 =collideRectCircle(950,random(200,400),50,20,x,y+280,40,50);
    if (hit11){
        alert("Dude! What are you doing!")
    }
    
     
}
 
   

  
function face(){
     
     if(keyIsPressed){
        if(keyCode==LEFT_ARROW){
            x--; 
        }
         else if (keyCode == RIGHT_ARROW){
            x++;
         }
         else {loop
              }    
         
    }
    if(keyIsPressed){
        if((key=='w')||(key=='W')){
            y--;
        }
        else if ((key=='s')||(key=='S')){
            y++;
        }
        else{loop}
        
    }
      
     fill(248,224,125);
    ellipse(x,y+280,40,50);
    
     fill(0);
    ellipse(x+15/4,y+270,5,5);
    ellipse(x+25/2,y+270.5,5);
         
      
    
    triangle(x+random(10,18),y+random(270,285),x+random(23,30),y+random(275,285),x+random(10,30),y+random(275,290));
    
          
  
    
}
