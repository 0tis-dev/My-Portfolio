var characterstandright, characterstandleft, dirtection, enemystandright, enemystandleft, characterwalkright1, characterwalkright2, enemydirection;

function preload() {
	characterstandright = loadImage("PC_Standing_Right.png.png");
	characterstandleft = loadImage("PC_Standing_Left.png.png");
	characterstandup = loadImage("PC_Stand_Up.png");
	characterstanddown = loadImage("PC_STAND_DOWN.png");
	enemystandright = loadImage("Enemy.png");
	characterwalkright1 = loadImage("PC_Walk1_Right.png.png");
	characterwalkright2 = loadImage("PC_Walk2_Right.png.png");
	characterattackright1 = loadImage("Characterattackleft1.png");
	characterattackright2 = loadImage("Characterattackleft2.png")
}
var xgoal = 400;
var ygoal = 400;
var goalfill = 'green';
var goaldiameter = 40;
var pcwidth = 40;
let x = 200;
let y = 200;
let s = 3;
let color = 0;
var enemyhealth = 30
var playerhealth = 100
var enemydamage = 10
var playerdamage = 10
let characterwalkright = [];
let characterwalkrightindex = 0;
let enemyx = 200
let enemyy = 200

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//BACKGROUND-------------------------------------------------------------------------
	background(71, 147, 79)
	//CHARACTER-------------------------------------------------------------------
	strokeWeight(0);
	//Border Control
	if(x <= 0){
		x+=2
	}
	if(x >= windowWidth - 40){
		x -= 2
	}
	if(y <= 0){
		y += 2
	}
	if(y >= windowHeight - 48){
		y -= 2
	}
	//Movement
	if (keyIsDown(37) === true&& keyIsDown(32) === false) {
		x -= 2;
		direction = characterstandleft;
		pcwidth = 40
	}
	if (keyIsDown(39) === true&& keyIsDown(32) === false) {
		x += 2;
		pcwidth = 40
		direction = characterstandright
		//WALKING TO THE RIGHT
		for (let i = 0; i < 4; i++) {

		}
	}

	if (keyIsDown(38) === true) {
		y -= 2;
	}
	if (keyIsDown(38) === true && keyIsDown(37) === false && keyIsDown(39) === false && keyIsDown(38) === false && keyIsDown(40) === false&& keyIsDown(32) === false) {
		direction = characterstandup
		pcwidth = 10
	}

	if (keyIsDown(40) === true) {
		y += 2;
		if (keyIsDown(40) === true && keyIsDown(37) === false && keyIsDown(39) === false && keyIsDown(38) === false) {
			direction = characterstanddown
		}
	}
	if (keyIsDown(37) === false && keyIsDown(39) === false && keyIsDown(38) === false && keyIsDown(40) === false && keyIsDown(32) === false) {
		direction = characterstandright
	}
	image(direction, x, y, pcwidth, 50);
	//ATTACKING------------------------------
	if (keyIsDown(32)) {//Add direction
		if (x === this.enemyx - 5 && y === this.enemyy + 5 || y === this.enemyy - 5) {
          damageenemy()
			attackamination()
		} else {
			attackanimation()
		}
	}
}
//ENEMY---------------
class enemy {
	constructor(xpos, ypos, enemyhealth, enemydamage, enemystandright) {
		this.enemyx = xpos
		this.enemyy = ypos
		this.enemyhealth = enemyhealth
		this.enemydamage = enemydamage
		this.enemyimage = enemystandright
		//this.enemydirection = image(enemystandright, enemyx, enemyy, 40, 45)
	}
}
function attackanimation() {
	direction = characterattackright1
	setTimeout(100)
	pcwidth = 60
	direction = characterattackright2
	setTimeout(100)
	pcwidth = 40
}
function damageenemy() {
	this.enemyhealth -= playerdamage
	if(this.enemyhealth <= 0){
		//dying animation
	}
}

e1 = new enemy(100, 100, enemyhealth, enemydamage, enemystandright)