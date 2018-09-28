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

  translate(width/2 - 100, height/2);
  rotate(frameCount*3);

  //line(0, 0, cos(frameCount*3) * 100, sin(frameCount*3) * 100);
  line(0, 0, cos(frameCount) * 100, sin(frameCount) * 100);
}
