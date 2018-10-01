function preload(){
  // put preload code here
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   angleMode(DEGREES);
   frameRate(60);
   background(30);
   strokeWeight(2);

   noStroke();


}

function draw() {

  var x;
  var y;

  translate(width/2, height/2 + 200);
  stroke(lerpColor(color('#ba1500'), color('#ffe41c'), frameCount/700));

  x = sin(frameCount*5) * 100;
  y = cos(frameCount*5) * 100;

  if(frameCount > 72){
    x = sin(frameCount*5) * 150;
    y = cos(frameCount*5) * 100 - 25;
  }

  if(frameCount > 144){
    x = sin(frameCount*5) * 200;
    y = cos(frameCount*5) * 100 - 50;
  }

  if(frameCount > 216){
    x = sin(frameCount*5) * 195;
    y = cos(frameCount*5) * 100 - 75;
  }

  if(frameCount > 288){
    x = sin(frameCount*5) * 185;
    y = cos(frameCount*5) * 100 - 110;
  }

  if(frameCount > 360){
    x = sin(frameCount*5) * 170;
    y = cos(frameCount*5) * 100 - 150;
  }

  if(frameCount > 432){
    x = sin(frameCount*5) * 140;
    y = cos(frameCount*5) * 100 - 210;
  }

  if(frameCount > 504){
    x = sin(frameCount*5) * 100;
    y = cos(frameCount*5) * 100 - 300;
  }

  if(frameCount > 576){
    x = sin(frameCount*5) * 50;
    y = cos(frameCount*5) * 100 - 400;
  }

  if(frameCount >= 648){
    noLoop();
  }

  line(0, 100, x, y);

}
