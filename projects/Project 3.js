var win;
function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  noStroke();
  //Win Variable
  win = Math.random()*100
  //Switch 1 variables
  x1 = 56.6667;
  y1 = 250;
  diameter1 = 40;
  //Switch 2 variables
  x2 = 2 * 56.6667;
  y2 = 250;
  diameter2 = 40;
  //Switch 3 variables
  x3 = 3 * 56.6667;
  y3 = 250;
  diameter3 = 40;
  //Switch 4 variables
  x4 = 4 * 56.6667;
  y4 = 250;
  diameter4 = 40;
  //Switch 5 variables
  x5 = 5 * 56.6667;
  y5 = 250;
  diameter5 = 40;
  //Switch 6 variables
  x6 = 6 * 56.6667;
  y6 = 250;
  diameter6 = 40;
}
let f1 = "gray",
  f2 = "gray",
  f3 = "gray",
  f4 = "gray",
  f5 = "gray",
  f6 = "gray",
  d1;
//Reset switch variables
var x = 160;
var y = 300;
var w = 80;
var h = 30;
//DRAW FUNCTION------------------------------------------
function draw() {
  background(99, 78, 43);
  //Panel
  fill(61, 59, 59)
  rect(25, 25, 350, 320, 10)
  textSize(30)
  fill('white')
  text('SWITCHBOARD', 90, 90)
  //Reset button
  if ((mouseX > x) && (mouseX < x+w) &&
    (mouseY > y) && (mouseY < y+h)) {
    fill('darkred');
  } 
  else {
    fill('red');
  }
  rect(x, y, w, h, 5);
  textSize(12)
  fill('white')
  text('RESET', 180, 320)
  //Switch 1
  d1 = dist(mouseX, mouseY, x1, y1);
  if (d1 < diameter1 / 2) {
    fill("gray");
  } else {
    fill("lightgray");
  }
  ellipse(x1, y1, diameter1, diameter1);
  //Switch 2
  d2 = dist(mouseX, mouseY, x2, y2);
  if (d2 < diameter2 / 2) {
    fill("gray");
  } else {
    fill("lightgray");
  }
  ellipse(x2, y2, diameter2, diameter2);
  //Switch 3
  d3 = dist(mouseX, mouseY, x3, y3);
  if (d3 < diameter3 / 2) {
    fill("gray");
  } else {
    fill("lightgray");
  }
  ellipse(x3, y3, diameter3, diameter3);
  //Switch 4
  d4 = dist(mouseX, mouseY, x4, y4);
  if (d4 < diameter4 / 2) {
    fill("gray");
  } else {
    fill("lightgray");
  }
  ellipse(x4, y4, diameter4, diameter4);
  //Switch 5
  d5 = dist(mouseX, mouseY, x5, y5);
  if (d5 < diameter5 / 2) {
    fill("gray");
  } else {
    fill("lightgray");
  }
  ellipse(x5, y5, diameter5, diameter5);
  //Switch 6
  d6 = dist(mouseX, mouseY, x6, y6);
  if (d6 < diameter6 / 2) {
    fill("gray");
  } else {
    fill("lightgray");
  }
  ellipse(x6, y6, diameter6, diameter6);
  //PRESSING SWITCHES
  //Switch 1
  if (mouseIsPressed && d1 < diameter1 / 2) {
    f1 === "yellow" ? (f1 = "gray") : (f1 = "yellow");
    f3 === "yellow" ? (f3 = "gray") : (f3 = "yellow");
  }
  //Switch 2
  if (mouseIsPressed && d2 < diameter2 / 2) {
    f2 === "yellow" ? (f2 = "gray") : (f2 = "yellow");
  }
  //Switch 3
  if (mouseIsPressed && d3 < diameter3 / 2) {
    f4 === "yellow" ? (f4 = "gray") : (f4 = "yellow");
    f5 === "yellow" ? (f5 = "gray") : (f5 = "yellow");
  }
  //Switch 4
  if (mouseIsPressed && d4 < diameter4 / 2) {
    f6 === "yellow" ? (f6 = "gray") : (f6 = "yellow");
    f4 === "yellow" ? (f4 = "gray") : (f4 = "yellow");
    f3 === "yellow" ? (f3 = "gray") : (f3 = "yellow");
  }
  //Switch 5
  if (mouseIsPressed && d5 < diameter5 / 2) {
    f2 === "yellow" ? (f2 = "gray") : (f2 = "yellow");
    f4 === "yellow" ? (f4 = "gray") : (f4 = "yellow");
  }
  //Switch 6
  if (
    mouseIsPressed &&
    d6 < diameter6 / 2 && f2 === 'yellow'
  ) {
    f1 === "yellow" ? (f1 = "gray") : (f1 = "yellow");
    f2 === "yellow" ? (f2 = "gray") : (f2 = "yellow");
    f3 === "yellow" ? (f3 = "gray") : (f3 = "yellow");
    f4 === "yellow" ? (f4 = "gray") : (f4 = "yellow");
    f5 === "yellow" ? (f5 = "gray") : (f5 = "yellow");
    f6 === "yellow" ? (f6 = "gray") : (f6 = "yellow");
  }
  //Reset button-----------------------------------------
  if ((mouseX > x) && (mouseX < x+w) &&
    (mouseY > y) && (mouseY < y+h) && (mouseIsPressed)) {
   f1=f2=f3=f4=f5=f6='gray' 
  }
  //LIGHTS
  //Light 1
  fill(f1);
  circle(56.6667, 150, 50);
  //Light 2
  fill(f2);
  circle(2 * 56.6667, 150, 50);
  //Light 3
  fill(f3);
  circle(3 * 56.6667, 150, 50);
  //Light 4
  fill(f4);
  circle(4 * 56.6667, 150, 50);
  //Light 5
  fill(f5);
  circle(5 * 56.6667, 150, 50);
  //Light 6
  fill(f6);
  circle(6 * 56.6667, 150, 50);
  //Winning
  if (
    f1 === "yellow" &&
    f2 == "yellow" &&
    f3 == "yellow" &&
    f4 === "yellow" &&
    f5 === "yellow" &&
    f6 === "yellow"
  ) {
    textSize(70)
    fill(win)
    text('YOU WIN', 55, 200)
  }
}