var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
  rectMode(CENTER);
}

function draw() {
  background(20, 15, 20, 5); // r, g, b, a (a is alpha transparency)
  fill(mouseX%150+10, mouseY%125+50, mouseX+mouseY%100, 255-mouseY%200);
  //ellipse(mouseX, mouseY, (w/2)-mouseX, (h/2)-mouseY);
  ellipse(mouseX, mouseY, 10, 10);
  ellipse(w-mouseX, h-mouseY, 10, 10);
  //rect(mouseY, mouseX, (w/2)-mouseY, (h/2)-mouseX);
  stroke(100-mouseY%50, 100-mouseX%50, 100-mouseX+mouseY%50);
  
}

