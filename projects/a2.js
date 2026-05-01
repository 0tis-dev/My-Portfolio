function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	for (var x = 0; x < 50; x++) {
		for (var y = 0; y < 25; y++) {//these loops make the grid of circles
			fill(10 * x * y / 15, 66, 66);
			strokeWeight(0);
			var xpos = 10 + 30 * x;
			var ypos = 10 + 30 * y;
			var size = 20
			size < 30 ? size +=1 : size -=1//Why doesn't this work???
			size > 10 ? size -=1 : size +=1
			circle(xpos, ypos, size);
		}
	}
}
