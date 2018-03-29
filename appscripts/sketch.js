
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
  //translate(w/2-noise(xOff)*w, h/2-noise(yOff)*h);
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
        translate(noise(xOff)*w, noise(yOff)*h);
        rotate(shift*w)
        fill(c%25+225, 0, 0, x%25+225);
        rect(0, 0, xw, xw);
        pop();
      }
  }
  }
  
}

function windowResized() {
  if (w >= h) {
	  w = windowWidth;
	  h = windowHeight; 
	} else {
	  	w = windowHeight;
	  	h = windowWidth;
	  }
  resizeCanvas(w, h);
  img.resize(w, h);
}