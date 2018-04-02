var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
  background(20, 15, 20);
}

function draw() {
  background(20, 15, 20, 5);
  for(var i = 0; i < w; i+=50){
  	for(var j = 0; j< h; j+=50){
  		strokeWeight((i+j)%20);
  	 	stroke(100+mouseX%155, 100+mouseY%155, ((mouseX+mouseY)%155), 10);
  	 	line(w/2, h/2, i, j);
  	 	fill(mouseY%255, mouseX%255, (200+(mouseX+mouseY)%55), 10);
  	 	ellipse(i, j, mouseX%i/4, mouseY%j/4);
  	}
  }
    
}