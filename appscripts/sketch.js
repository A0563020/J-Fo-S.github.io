
var w = 640;
var h = 480;
var xOff = 0;
var yOff = 0.5;

function setup() {
  //var contX = document.getElementById("frame0");
  //console.log(contX);
  canvas =createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  background(255);
  noStroke();
  //frameRate(2);
}
function draw() {
  ratioX = Math.trunc(w/64);
  ratioY = Math.trunc(h/24);
  var x = random(w);
  var y = random(h);
  var xw = random(10);
  var c = random(50);
  var sc = random(1);
  if(sc > 0.5){
    for (var i = 0; i < w; i+=ratioX) {
      var shift = noise(xOff)*w;
      xOff = xOff + 0.001;
      fill(c%200+55, c%100+15);
      rect(i, y, c, c);
      for (var j = 0; j < h; j+=ratioY){
      	push();
        fill(c%25+205, x%25+205);
        rect(2*x-shift, j, xw, c);
        pop();
      }
   }
 } else{
    
    for (var i = 0; i < h; i+=ratioX) {
      var shift = noise(yOff)*w;
      yOff = yOff + 0.001;
      fill(c%200+55, c%10+15);
      rect(x, i, xw, c);
      for (var j = 0; j < w; j+=ratioY){
        push();
        fill(c%25+225, x%25+225);
        rect(j, 2*x-shift, xw, xw);
        pop();
      }
  }
  }
  
}

function windowResized() {
  w = windowWidth
  h = windowHeight
  resizeCanvas(w, h);
  img.resize(w, h);
}