// ── Project Two ───────────────────────────────────────
// Replace this starter code with your own project!

const runBtn = document.getElementById('runBtn');
const demo   = document.getElementById('demo');
const output = document.getElementById('output');

runBtn.addEventListener('click', function () {
  // Clear previous output
  demo.innerHTML = '';
  output.textContent = '';

  // ── Your code starts here ──────────────────────────
function setup() {
let canvas = createCanvas(500, 500);
   canvas.parent('sketch-container');
  }

//HOUSE LIGHTS
let hlChoice = Math.floor(Math.random()*3)+1;
let lightOption
if(hlChoice == 1){
  lightOption = 1
}
let windowX, windowY
if(hlChoice == 2){
  lightOption = 2
}
if(hlChoice == 3){
  lightOption = 3
}
console.log(lightOption)

//HOUSE COLOR
let HCOLOR1 = 59
let HCOLOR2 = 41
let HCOLOR3 = 18
//SUN VARIABLES
let SunX = 200
let SunY = 90
let suncolor1 = 255
let suncolor2 = 235
let suncolor3 = 148
let smove = 1
let symove = 1
//SKY COLOR
let skycolor1 = 148
let skycolor2 = 187
let skycolor3 = 255
//FAR MOUNTAINS
let fmountcolor1 = 87
let fmountcolor2 = 70
//MID MOUNTAINS
let mmountcolor1 = 74
let mmountcolor2 = 46
//CLOSE MOUNTAINS
let cmountcolor1 = 74
let cmountcolor2 = 17
//DRAW FUNCTION BEGINS RIGHT HERE

function draw() {
  background(skycolor1, skycolor2, skycolor3);
  //SUN
  fill(suncolor1, suncolor2, suncolor3)
  circle(SunX, SunY, 40)
  //FAR MOUNTAINS
  // base mountain color: fill(15, 74, 17)
  fill(69, fmountcolor1, fmountcolor2)
  strokeWeight(0)
  triangle(0, 350, 0, 90, 100, 150)
  triangle(99, 150, 0, 350, 149, 130)
  triangle(148, 130, 188, 200, 0, 350)
  triangle(187, 200, 400, 350, 277, 150)
  triangle(400, 350, 400, 110, 296, 185)
  //MID MOUNTAINS
  fill(45, mmountcolor1, mmountcolor2)
  triangle(0, 200, 50, 150, 0, 350)
  triangle(49, 150, 0, 350, 160, 180)
  triangle(159, 180, 188, 200, 0, 350)
  triangle(-1, 350, 405, 350, 187, 200)
  triangle(405, 350, 240, 250, 405, 190)
  //CLOSE MOUNTAINS
  fill(15, cmountcolor1, cmountcolor2)
  rect(0, 350, 400, 50)
  triangle(0, 350, 0, 260, 130, 270)
  triangle(0, 350, 129, 270, 280, 240)
  triangle(0, 350, 278, 240, 400, 280)
  triangle(-1, 350, 400, 280, 400, 370)
  //HOUSE
  fill(HCOLOR1, HCOLOR2, HCOLOR3)
  rect(250, 310, 30, 30)
  rect(270, 320, 40, 20)
  fill('black')
  rect(257, 315, 5, 5)
  rect(300, 325, 5, 5)
  rect(267, 325, 5, 5)
  fill('yellow')
  rect(windowX, windowY, 5, 5)
//SUN MOVEMENT
  //side to side
  if(SunX > 400) {
    (smove = -1);
  } else if(SunX < 10) {
    (smove = 1)
  }
  SunX = SunX + smove
  //up and down (PROBLEMS)
  if(smove < 0, SunX < 100) {
    (symove = 1);
  } else if(smove > 0, SunX < 100) {
    (symove = -1);
  } else if(smove > 0, SunX > 300) {
    (symove = 1)
  } else if(smove < 0, SunX > 300) {
    (symove = -1)
  } else if(SunX > 100, SunX < 300) {
    (symove = 0)
  }
  SunY = SunY + symove
}
  if(lightOption  == 1){
    windowX = 257
    windowY = 315
  }
  if(lightOption == 2){
    windowX = 300
    windowY = 325
  }
  if(lightOption == 3){
    windowX = 267
    windowY = 325
  }
  // ── Your code ends here ────────────────────────────
});
