/**
 * Alexandra Zhao <yz3514@bard.edu>
 * Feb 26 2017
 *Idea 135
 *p5-pong
 *I found this game is so complicated for playing when use the right and left key, so i movement of paddle with mouse. Also, since we are required a "game over" thing and specific lives, i modify this game to everyone only have one chance to play it, and using the framecourt to court the time. The time longer you pla means you survived longer time. The game will reset once you died. 
 */


var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;


function setup() {
  createCanvas(600, 300);
  paddle_h = 16;
  paddle_w = 6 * paddle_h;
  paddle_x = width / 2;
  paddle_y = height - paddle_h;
  paddle_step = 0;
  ball_r = 13;
  textSize(20);
  frameRate()
  reset();
}

function draw() {
  background(196);
  
  textSize(68);
  
    text(frameCount, 480, 100);
 
    



  // move paddle
  //paddle_x += (mouseX - paddle_x) * .1;
  paddle_x = mouseX-paddle_w/2 + paddle_step;

  // is the ball hitting the right or left wall?
  if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
    ball_x_step = -ball_x_step;
  }

  // hitting the top?
  if (ball_y - ball_r < 0) {
    ball_y_step = -ball_y_step;
  }

 // hitting the paddle?
  if (ball_y + ball_r > paddle_y) {
    if (ball_x >= mouseX-paddle_w/2 && ball_x <= mouseX-paddle_w/2 + paddle_w) {
      ball_y_step = -ball_y_step;
      ball_y = paddle_y - ball_r;
      
    }
    
    
    else if (ball_y + ball_r > paddle_y){
      alert("You lose! :(");
      frameCourt
      reset();
    }
    }

  // move ball by ball_x_step and ball_y_step
  ball_x = ball_x + ball_x_step;
  ball_y = ball_y + ball_y_step;

  //draw ball
  noStroke();
  fill(196, 0, 0,100);
  ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

  // draw paddle
  stroke(24);
  fill(64);
  rect (mouseX-paddle_w/2,paddle_y,paddle_w,paddle_h);
  rect(paddle_x, paddle_y, paddle_w, paddle_h);
}



function reset() {
 
  ball_x = random(ball_r, width - ball_r);
  ball_y = random(ball_r, height / 2);
  ball_x_step = random(-3, 3);
  ball_y_step = random(1, 3);
    

}



function keyReleased() {
  paddle_step = 0;
}


