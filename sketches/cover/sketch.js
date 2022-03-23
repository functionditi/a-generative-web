function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(300);
  
  
}

function draw() {
 noFill();
 stroke(0, 255, 0);
 strokeWeight(3);

fill(255);
  
  strokeWeight(3);
  ellipse(mouseX, mouseY, 25);
}