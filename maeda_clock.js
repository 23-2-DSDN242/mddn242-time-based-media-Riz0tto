originX = 230;
originY = 50;

{ // number shape coords map(two arrays for each number, creating pairs of coordinates for X and Y, value + .1 for X, .2 for Y)

var numbersMap = new Map();
numbersMap.set(0.1, [50, 100, 150, 0, 200, 0, 200, 0, 200, 0, 200, 0, 200, 0, 200, 0, 200, 50, 100, 150]);
numbersMap.set(0.2, [0, 0, 0, 50, 50, 100, 100, 150, 150, 200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 400]);

numbersMap.set(1.1, [100, 50, 100, 100, 100, 100, 100, 100, 100, 50, 100, 150]);
numbersMap.set(1.2, [0, 50, 50, 100, 150, 200, 250, 300, 350, 400, 400, 400]);

numbersMap.set(2.1, [50, 100, 150, 0, 200, 200, 200, 100, 150, 50, 0, 0, 50, 100, 150, 200]);
numbersMap.set(2.2, [0, 0, 0, 50, 50, 100, 150, 250, 200, 300, 350, 400, 400, 400, 400, 400]);

numbersMap.set(3.1, [50, 100, 150, 0, 200, 200, 200, 100, 150, 200, 200, 0, 200, 50, 100, 150]);
numbersMap.set(3.2, [0, 0, 0, 50, 50, 100, 150, 200, 200, 250, 300, 350, 350, 400, 400, 400]);

numbersMap.set(4.1, [0, 200, 0, 200, 0, 200, 0, 200, 0, 50, 100, 150, 200, 200, 200, 200, 200]);
numbersMap.set(4.2, [0, 0, 50, 50, 100, 100, 150, 150, 200, 200, 200, 200, 200, 250, 300, 350, 400]);

numbersMap.set(5.1, [0, 50, 100, 150, 200, 0, 0, 0, 0, 50, 100, 150, 200, 200, 200, 0, 50, 100, 150]);
numbersMap.set(5.2, [0, 0, 0, 0, 0, 50, 100, 150, 200, 200, 200, 200, 250, 300, 350, 350, 400, 400, 400]);

numbersMap.set(6.1, [50, 100, 150, 0, 200, 0, 0, 0, 50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150]);
numbersMap.set(6.2, [0, 0, 0, 50, 50, 100, 150, 200, 200, 200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 400]);

numbersMap.set(7.1, [0, 50, 100, 150, 200, 200, 200, 150, 150, 150, 100, 100, 100]);
numbersMap.set(7.2, [0, 0, 0, 0, 0, 50, 100, 150, 200, 250, 300, 350, 400]);

numbersMap.set(8.1, [50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150]);
numbersMap.set(8.2, [0, 0, 0, 50, 50, 100, 100, 150, 150, 200, 200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 400]);

numbersMap.set(9.1, [50, 100, 150, 0, 200, 0, 200, 0, 200, 50, 100, 150, 200, 200, 200, 0, 200, 50, 100, 150]);
numbersMap.set(9.2, [0, 0, 0, 50, 50, 100, 100, 150, 150, 200, 200, 200, 200, 250, 300, 350, 350, 400, 400, 400]);

}

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  beige
  fill(255); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  
  //text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
  numberScale = 1;
  noFill();

  // convert time to digits and draw them, checks if the value is one digit, adds a 0 in front if it is

  stroke(255, 0, 0);
  strokeWeight(4*numberScale);

  if(obj.hours.toString().length > 1) {
    draw_number(Number(obj.hours.toString()[0]), 0, 50);
    draw_number(Number(obj.hours.toString()[1]), 1, 50);
  }  else {
    draw_number(0, 0, 50);
    draw_number(Number(obj.hours.toString()[0]), 0, 50);
  }

  stroke(255, 255, 0);
  strokeWeight(4*numberScale);

  if(obj.minutes.toString().length > 1) {
    draw_number(Number(obj.minutes.toString()[0]), 0, 40);
    draw_number(Number(obj.minutes.toString()[1]), 1, 40);
  }  else {
    draw_number(0, 0, 40);
    draw_number(Number(obj.minutes.toString()[0]), 1, 40);
  }

  stroke(0, 0, 255);
  strokeWeight(4*numberScale);

  if(obj.seconds.toString().length > 1) {
    draw_number(Number(obj.seconds.toString()[0]), 0, 30);
    draw_number(Number(obj.seconds.toString()[1]), 1, 30);
  }  else {
    draw_number(0, 0, 30);
    draw_number(Number(obj.seconds.toString()[0]), 1, 30);
  }

}

// Draw a given number in a given position, with a given circle size
function draw_number(number, position, circleSize) {
  for(let i = 0; i < numbersMap.get(number+0.1).length; i++) {
    ellipse(position*300*numberScale+originX+numbersMap.get(number+0.1)[i]*numberScale, originY+numbersMap.get(number+0.2)[i]*numberScale, circleSize*numberScale);
  }
}