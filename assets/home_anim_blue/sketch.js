function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  fill(0, 255, 0);
  noStroke();
  drawDots();
  push();
  translate(width/2, height/2);
  rotate(PI/32*frameCount*0.1);
   translate(-width/2, -height/2);
  drawDots();
  pop();
}

function drawDots(){
  let l=8
  for (let i=-100; i<width+100; i+=l){
    for (let j=-100; j<height+100; j+=l){
        ellipse(i, j, 3);
    }
  
  }
}