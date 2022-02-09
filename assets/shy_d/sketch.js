let buffer1, buffer2;
let keyvalue='P';
let letterSpace=0;

function setup() {
  createCanvas(540, 540, WEBGL);
  buffer1 = createGraphics(800, 800);
  buffer2 = createGraphics(800, 800, WEBGL);
   colors=[];
  colors.push("#F0E9E1");
 colors.push("#FCBEBF");
   colors.push("#F4584C");
   colors.push("#FC97D9");
 //colors.push("#32BF8A");
  
    colors.push("#367ADD");
  colors.push("#353535");
   //colors.push("#D28EFF");
//   colors.push("#FF955B");
//   colors.push("#F0E9E1");
}

function keyTyped() {
  keyvalue=key;
  drawLetter(keyvalue);
  letterSpace+=200;
}

function drawLetter(keyValue){
   push();
  buffer2.push();
  buffer2.translate(-width/2,-height/2);
  buffer2.fill(255);
  console.log(letterSpace)
  buffer2.texture(buffer1);
  buffer2.textureMode(NORMAL);
  let x1=width/2-buffer1.width/2;
  let y1=height/2-buffer1.height/2;
   let x2=width/2+buffer1.width/2;
  let y2=height/2+buffer1.height/2;
  let px = map(mouseX, 0, width, x1, x2) ;
  let py = map(mouseY, 0, height, y1, y2);
//    let px = map(3*width/4, 0, width, x1, x2) ;
//   let py = map(height/4, 0, height, y1, y2)
  
  
  buffer2.beginShape();
  buffer2.vertex(x1, y1, 0, 0);
  buffer2.vertex(px, y1, 0.5, 0);
  buffer2.vertex(px, py, 0.5, 0.5);
  buffer2.vertex(x1, py, 0, 0.5);
  buffer2.endShape();
  
  buffer2.beginShape();
  buffer2.vertex(px, y1, 0.5, 0);
  buffer2.vertex(x2, y1, 1, 0);
  buffer2.vertex(x2, py, 1, 0.5);
  buffer2.vertex(px, py, 0.5, 0.5);
  buffer2.endShape();
  
  buffer2.beginShape();
  buffer2.vertex(x1, py, 0, 0.5);
  buffer2.vertex(px, py, 0.5, 0.5);
  buffer2.vertex(px, y2, 0.5, 1);
  buffer2.vertex(x1, y2, 0, 1);
  buffer2.endShape();
  
  buffer2.beginShape();
  buffer2.vertex(px, py, 0.5, 0.5);
  buffer2.vertex(x2, py, 1, 0.5);
  buffer2.vertex(x2, y2, 1, 1);
  buffer2.vertex(px, y2, 0.5, 1);
  buffer2.endShape();
  buffer2.pop();

  drawDots();
  pop();
}

function drawDots(){
  
  push();
  //rotate(PI)
  // fill(0);
  // noStroke();
  noFill();
  strokeWeight(6);
  beginShape();
   for (let i=0; i<buffer2.width; i+=55){
     for (let j=0; j<buffer2.height; j+=55){
       if (brightness(buffer2.get(i, j)) < 100){
         stroke(random(colors))
         fill(random(colors))
         push();
         // translate(i, -j);
         square(i, -j, 90);
         
         //vertex(i, -j);
         pop();
        
       
       }
     }
   }
  endShape();
  pop();
//image(buffer1, width/2, -height);
}

function draw() {
  randomSeed(2);
  buffer1.background(255);
  translate(-buffer2.width/2, buffer2.height/2);
  buffer2.background(0);
  buffer1.textSize(600);
  buffer1.text(keyvalue, 0, buffer1.height);
  background(colors[2]);
  drawLetter(keyvalue);
}