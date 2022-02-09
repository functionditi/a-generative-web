let buffer1, buffer2;
let keyvalue='B';
let letterSpace=0;
let font;

function preload() {
  font = loadFont("Helvetica.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  buffer1 = createGraphics(500, 500);
  buffer2 = createGraphics(500, 500, WEBGL);
   colors=[];
  colors.push("#F0E9E1");
 colors.push("#FCBEBF");
   colors.push("#F4584C");
   colors.push("#FC97D9");
 //colors.push("#32BF8A");
  
    colors.push("#367ADD");
  //colors.push("#353535");
   //colors.push("#D28EFF");
//   colors.push("#FF955B");
  textFont(font);
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
  let px = map(mouseX, 0, width, x2, x1) ;
  let py = map(mouseY, 0, height, y2, y1);
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
   for (let i=0; i<buffer2.width; i+=25){
     for (let j=0; j<buffer2.height; j+=25){
       if (brightness(buffer2.get(i, j)) < 100){
         stroke(random(colors))
         fill(random(colors))
         push();
          //translate(i, -j);
         square(i, -j, random(5, 25));
        
         pop();
        
       
       }
     }
   }
  endShape();
  pop();
//image(buffer1, -width/2, -height/2);
}

function draw() {
  randomSeed(2);
  buffer1.background(255);
  push();
  translate(-buffer2.width/2, buffer2.height/2);
  buffer2.background(0);
  buffer1.textSize(700);
  buffer1.text(keyvalue, 0, buffer1.height);
  
  background("#353535");
 
  drawLetter(keyvalue);
  pop();
  
  fill(colors[4])
   textSize(20);
 // text("Generative Type.", -350, -250)

}