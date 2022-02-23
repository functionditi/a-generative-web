//how many letterforms can I create with just three shapes: 2 circle and 1 trapezium? edit from 2: make the trapezium tighter.

let bg_col, colors;
let ditherType = 'bayer';
let theLayer1;
let theLayer2;
let layer1_Riso, layer2_Riso, layer3_Riso;
let mode;
let r=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
   //noLoop();
  
  red=new Riso('brightred');
  yellow=new Riso('brightred');
shape1=createGraphics(windowWidth, windowHeight);
  shape2=createGraphics(windowWidth, windowHeight);
   shape3=createGraphics(windowWidth, windowHeight);
  colors=[];
  colors.push(color(0))
  frameRate(1);
}


function draw() {
  background(255);
  clearRiso();
  shape1.background(255);
  shape1.noFill();
  shape1.stroke(0);
  shape1.strokeWeight(3);
  let elocx=random(0, width-0);
  let elocy=random(0, height-0);
  let num=int(random(20, 100));
  for (let i=0; i<num; i++){
    shape1.ellipse(elocx, elocy, i*10);
  }
  
  let dithered1 = ditherImage(shape1, ditherType, 130);
  red.image(dithered1, 0, 0);
  
  shape2.background(255);
  shape2.noFill();
  shape2.stroke(0);
  shape2.strokeWeight(3);
  
  // let rlocx=random(-width/2, width-0);
  // let rlocy=random(-height/2, height-0);
  // let rrot=random(PI);
  // let l=random(200, 400);
  // for (let i=0; i<25; i++){
  //   shape2.push();
  //   shape2.translate(rlocx, rlocy)
  //   shape2.rotate(rrot);
  //   shape2.line(i, i*2, l, i*7)
  //   shape2.pop();
  // }
  
  let e1locx=random(0, width-0);
  let e1locy=random(0, height-0);
  let num2=int(random(20, 100));
  for (let i=0; i<num2; i++){
    shape2.ellipse(e1locx, e1locy, i*13);
  }
  
  let dithered2 = ditherImage(shape2, ditherType, 130);
  yellow.image(dithered2, 0, 0);
  
  drawRiso();
  
 
}

function mousePressed() { //when mouse is pressed
  exportRiso(); //export files for print
}