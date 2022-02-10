function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  randomSeed(2);
  translate(width/2, height/2);
  background(255);
  stroke(0, 255, 0);
  strokeWeight(2);
   let out=[];
  let xOff=0;
for (let theta=0; theta<=96; theta++){
  // out[theta]=map(noise(xOff), 0, 1, 0, 10);
  // xOff+=0.05;
  out.push({
    offset:random(4),
    drawEl: int(random(5))});
}
drawFirework(1, 1, out);
  
  // for (let i=0; i<4; i++){
  //   push();
  //   rotate(i*PI/2);
  //   drawFirework(0, -1, out);
  //   pop();
  // }

}

function drawFirework(moveX, moveY, theOut){
  push();
 
  //translate(width/2*moveX, width/2*moveY);
  for (let theta=0; theta<=96; theta+=1){
    push();
      r=5; 
      x=r*cos(theta*PI/48);
      y=r*sin(theta*PI/48);
      translate(x, y);
    
    let outX=theta*theOut[theta].offset*abs(sin(frameCount*0.005));
    let outY=theta*theOut[theta].offset*abs(sin(frameCount*0.005))
      line(0, 0, x*outX, y*outY);
    noFill();
    
    ellipse(x*outX, y*outY, theOut[theta].offset*2);

    pop();
  }
  pop();
}