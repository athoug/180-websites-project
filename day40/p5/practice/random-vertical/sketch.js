var distance_left;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(22, 160, 133);
  stroke(46, 204, 113);
  strokeWeight(3);
  distance_left = random(width); // to hold a variable for the starting points for both line
  // draw the line
  line(distance_left, 0, distance_left, height);
}