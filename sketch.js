function preload(){
  // put preload code here
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   angleMode(DEGREES);
   frameRate(20);
   background(30);
}

function draw() {

  stroke(256);

  translate(width/2, height/2);
  line(100, 0, cos(frameCount*5) * 100, sin(frameCount*5) * 100);
}
