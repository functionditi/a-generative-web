var xoff=0, yoff=0, dottie, xoff_=10000, yoff_=10000;
var offset;
let c=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  let l=7.5;
  
  background(255);
  yoff=0;
  
  for (let i=0; i<=width; i+=10)
      {
        xoff=0;
        for (let j=0; j<=height; j+=10)
            {
            
              
              push();
              dottie=map(noise(xoff, yoff), 0, 1, 0.05, 35);
              strokeWeight(dottie/4.5);
              offset=frameCount*0.075*noise(xoff_, yoff_);
              
              let a=atan(map(noise(xoff, yoff), 0, 1, -TWO_PI, TWO_PI))+offset;
            
                  stroke(0, 255, 0);
              translate(i, j)
              rotate(a);
              line(0, 0, l, l);
              pop();
              
              xoff+=0.05;
              
            }
        yoff+=0.01;
      }
  
}