// ── Project One ───────────────────────────────────────
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
  createCanvas(400, 400);
}
//console.log(error) - this function adds an error
let x = 200
let y = 200
let smove = 1
//BACKGROUND VARIABLES
let rx = Math.floor(Math.random()*350+1); 
let ry = Math.floor(Math.random()*350+1);
let rx2 = Math.floor(Math.random()*350+1);
let ry2 = Math.floor(Math.random()*350+1);
let rx3 = Math.floor(Math.random()*120+50);
let ry3 = Math.floor(Math.random()*120+50);
function draw() {
  background(60, 52, 173);//ocean
  //BACKGROUND SECTION
    //first rock
  fill('tan')
  circle(rx, ry, 50)
  rect(rx, ry, 30, 40)
  ellipse(rx+19, ry-10, 20, 40)
    //second rock
  ellipse(rx2, ry2, 40, 60)
  ellipse(rx2+20, ry2+20, 30, 50)
    //third rock
  fill('tan')
  rect(rx3, ry3-10, 50, 53)
  ellipse(rx3, ry3, 70, 80)
  ellipse(rx3+20, ry3+12, 70, 60)
  ellipse(rx3+200, ry3+20, 90, 70)
  ellipse(rx3+180, ry3+10, 80, 60)
  //SUBMARINE SECTION
  fill('white')
  arc(x, y, 50, 50, 2.0944, 1.0472)
  fill('gray')
  circle(x, y, 30)//submarine's windshield
  fill('white')
  rect(x-10, y-35, 20, 40, 8)
  if(y > 400) {
    (smove = -1);
  } else if(y < 10) {
    (smove = 1)
  }
  y = y + smove//very important code
  fill('tan')
  ellipse(rx3+100, ry3+15, 180, 60)//third rock's arch
  
}
  // ── Your code ends here ────────────────────────────
});