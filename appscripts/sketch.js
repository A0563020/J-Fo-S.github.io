//src: http://creative-coding.decontextualize.com/video/

var w = 640;
var h = 480;
var img;
var increment=0;
var ref = [];
var px = [];

function preload() {
  img = loadImage("assets/P_20151101_081631.png");
}

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  //imageMode(CENTER);
  img.resize(w, h);
  img.loadPixels();
  noStroke();
  

}
function draw() {
  //background(0, 10, 10, 1);
  ratioX = Math.trunc(w/32);
  ratioY = Math.trunc(h/24);
  image(img, 0, 0); // comment this out to only show rect shapes below
  //img.loadPixels(); // loads the pixels to get the color attributes of each XY position
  for (var x = 0; x < img.width; x += ratioX) {
     for (var y = 0; y < img.height; y += ratioY){
      var pixVals = ((y*w)+x)*4; //SEEMS CONFUSING AT FIRST, but each pixel has 4 values (RGBA)
      push();
      translate(x, y);
      rotate(x+increment*noise(x)*0.2);
      //fill((img.pixels[pixVals+2]+increment)%img.pixels[pixVals+2], (img.pixels[pixVals+1]+increment)%img.pixels[pixVals+1], (img.pixels[pixVals]+increment)%img.pixels[pixVals]/8) ; // filling each stroke with inverted colors
      //rect(0, 0, 2, 2);
      //rotate(-4*(x+increment*noise(x)*0.2));
      fill(img.pixels[pixVals], img.pixels[pixVals+1], img.pixels[pixVals+2], img.pixels[pixVals+2]); // filling each pixel as rect with rgb values 
      quad(sin(noise(increment*0.001))*20, tan(noise(increment*0.002))*2, tan(increment*0.0011)*-2, cos(increment*0.003)*20, cos(noise(increment*0.001))*-20, sin(noise(increment*0.001))*20, cos(increment*0.0012)*20, sin(increment*0.033)*20);
      pop();
  
  	}
  }
  increment++;
}

function windowResized() {
  w = windowWidth
  h = windowHeight
  resizeCanvas(w, h);
  img.resize(w, h);
}