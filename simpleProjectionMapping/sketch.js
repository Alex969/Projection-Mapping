function preload() {
  img = loadImage("assets/rockets.png");
}

var corners = [[-152,-249],[320,-151],[324,146],[-152,61],[-312,-134],[-312,158],[143,234]] 
activeCorner = 0
myString = ""

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pg = createGraphics(640, 480);//size of off-screen buffer (aspect ratio)
    pg2 = createGraphics(500,500)
  x = 0;
    phase = 0;
    phase2 = 1;
    
   
}

function draw() {
  background(0);

     //applying offscreen renderer (DO NOT MOVE!)
  texture(pg);
    quad(corners[0][0], corners[0][1], corners[1][0], corners[1][1], corners[2][0], corners[2][1], corners[3][0], corners[3][1]) //HARD CODE COORDINATES
    quad(corners[4][0], corners[4][1], corners[0][0], corners[0][1], corners[3][0], corners[3][1], corners[5][0], corners[5][1]) 
//    quad(corners[5][0], corners[5][1], corners[6][0], corners[6][1], corners[2][0], corners[2][1], corners[3][0], corners[3][1])
    
    if (keyIsPressed) moveQuad();
    
  animation1()
}

function animation1()
    {
        //offscreen renderer animation BEGIN
//  pg.background(125);
//  pg.fill(255);
//  pg.ellipse(x, pg.height / 2, 50, 50);
//  pg.textSize(30);
//  pg.text("hello world", 10, pg.height / 2);
//  x += 2;
//  x %= pg.width;  
    pg.push();
  pg.background(0);
  pg.translate(pg.width / 2, pg.height / 2);
  phase += 4;
  pg.rectMode(CENTER);
  pg.colorMode(HSB);
  var totalSquares = 20;
  for (var i = totalSquares; i > 0; i--) {
    var tempPhase = phase + (i * 10);
    var sw = pg.map(pg.sin(pg.radians(tempPhase)), -1, 1, 2, 18);
    var tempWidth = (pg.width / totalSquares) * i;
    var tempHeight = (pg.height / totalSquares) * i;
    pg.fill(abs(i)%360,100,100);
    pg.rect(0, 0, tempWidth, tempHeight);
    pg.fill(0);
    pg.rect(0, 0, tempWidth - sw, tempHeight - sw);
  }
  pg.pop();
    }
function animation2()
    {
        //offscreen renderer animation BEGIN
//  pg.background(125);
//  pg.fill(255);
//  pg.ellipse(x, pg.height / 2, 50, 50);
//  pg.textSize(30);
//  pg.text("hello world", 10, pg.height / 2);
//  x += 2;
//  x %= pg.width;  
    pg2.push();
  pg2.background(0);
  pg2.translate(pg2.width / 2, pg2.height / 2);
  phase2 += 4;
  pg2.rectMode(CENTER);
  pg2.colorMode(HSB);        
  var totalSquares = 20;
  for (var i = totalSquares; i > 0; i--) {
    var tempPhase = phase2 + (i * 10);
    var sw = pg2.map(pg2.sin(pg2.radians(tempPhase)), -1, 1, 2, 18);
    var tempWidth = (pg2.width / totalSquares) * i;
    var tempHeight = (pg2.height / totalSquares) * i;
    pg2.fill(abs(i)%360,100,100);
    pg2.rect(0, 0, tempWidth, tempHeight);
    pg2.fill(0);
    pg2.rect(0, 0, tempWidth - sw, tempHeight - sw);
  }
  pg2.pop();
    }
function keyReleased() {
  if (keyCode == 13) {
    activeCorner=int(myString);
    console.log("Active corner: " + activeCorner);
    myString = "";
    } else if (keyCode>=48 && keyCode<=57){
      myString += "" + keyCode - 48;
    }
}

function moveQuad() {
  if (keyCode === RIGHT_ARROW){
    corners[activeCorner][0]++;
  } else if (keyCode === LEFT_ARROW){
    corners[activeCorner][0]--;
  } else if (keyCode === DOWN_ARROW){
    corners[activeCorner][1]--;
  } else if (keyCode === UP_ARROW){
    corners[activeCorner][1]++;
  }
}


