
function setup() {
  createCanvas(640, 480);
  phase = 0;
}

function draw() {
  breathingSquare();
}

function breathingSquare() {
  push();
  background(0);
  translate(width / 2, height / 2);
  phase += 4;
  rectMode(CENTER);
  var totalSquares = 20;
  for (var i = totalSquares; i > 0; i--) {
    var tempPhase = phase + (i * 10);
    var sw = map(sin(radians(tempPhase)), -1, 1, 2, 18);
    var tempWidth = (width / totalSquares) * i;
    var tempHeight = (height / totalSquares) * i;
    fill(255);
    rect(0, 0, tempWidth, tempHeight);
    fill(0);
    rect(0, 0, tempWidth - sw, tempHeight - sw);
  }
  pop();
}
