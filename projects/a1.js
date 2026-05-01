var s;
//GREEN LIGHT
let r1 = 9;
let g1 = 46;
let b1 = 1;
//YELLOW LIGHT
let r2 = 38;
let b2 = 36;
let g2 = 2;
//RED LIGHT
let r3 = 38;
let b3 = 3;
let g3 = 2;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER);
  s = second();
  text("Current second: \n" + s, 5, 50);
  fill(0);
  rect(200, 200, 40, 100);
  //GREEN LIGHT
  fill(r1, g1, b1);
  circle(200, 235, 30);
  if (s <= 11 && s >= 0) {
    r1 = 32;
    g1 = 173;
    b1 = 0;
  } else if (s <= 41 && s >= 30) {
    r1 = 32;
    g1 = 173;
    b1 = 0;
  } else {
    r1 = 9;
    g1 = 46;
    b1 = 1;
  }
  //YELLOW LIGHT
  fill(r2, g2, b2);
  circle(200, 202.5, 30);
  if (s <= 17 && s >= 12) {
    r2 = 250;
    g2 = 200;
    b2 = 2;
  } else if (s <= 47 && s >= 42) {
    r2 = 250;
    g2 = 200;
    b2 = 2;
  } else {
    r2 = 38;
    g2 = 36;
    b2 = 2;
  }
  //RED LIGHT
  fill(r3, g3, b3);
  circle(200, 170, 30);
  if (s <= 29 && s >= 18) {
    r3 = 201;
    g3 = 16;
    b3 = 10;
  } else if (s <= 59 && s >= 48) {
    r3 = 201;
    g3 = 16;
    b3 = 10;
  } else {
    r3 = 38;
    g3 = 3;
    b3 = 2;
  }
  fill("black");
}