function preload() {
  img = loadImage("assets/box.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
  pg = createGraphics(img.width, img.height);
}

function draw() {
  background(255);
  pg.background(255);
  pg.image(img,0,0);

  var newX =mouseX-windowWidth/2; //CORRECT THIS LINE
  var newY =windowHeight/2-mouseY; //CORRECT THIS LINE

  pg.text(newX + ", " + newY, 20, 20);

  //pass graphics as texture
  texture(pg);
  plane(700);
  fill(0,255,0);
  plane(4);
}
