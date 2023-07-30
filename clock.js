
/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  // fill(0, 0, 200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);

  colorMode(HSB, 100);
  background(60, 80, 50);

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis; 

  // phase between -1 and 1 second
  let phase = 1;
  if(seconds % 2 == 0) {
    phase = 1;
  } else {
    phase = -1;
  }

  // draw waves in the background

  let wavesX = 9; wavesY = 7;
  let offset = width/50;

  for(let i = 1; i <= wavesX; i++) {

    let offsetPhase = 1;

    for(let j = 1; j <= wavesY; j++) {
        
        if(offsetPhase == 1) {
          offsetPhase = -1;
        } else {
          offsetPhase = 1;
        }

      draw_wave(millis, phase*offsetPhase, (i*width/(wavesX+1))+offset*offsetPhase, j*height/(wavesY+1)); 

    }
  }

  // draw an island

  // draw_island()

  // draw cars

  updateCars(millis, seconds, minutes);

}

// Waves

function draw_wave(millis, wavePhase, xPos, yPos) { // draws a wave at a location (wavePhase controls whether the wave is going up or down)

  colorMode(HSB, 100);

  millisPhaser = map(millis, 0, 1000, -1*wavePhase, 1*wavePhase);
  let horizontalMotion = 5*millisPhaser;

  push();
  
  translate(xPos+horizontalMotion, yPos);
  scale(1);
  
  noFill();
  strokeWeight(1);
  stroke(60, 80, 70);

  // wave curve
  beginShape();
  curveVertex(-20, 2*millisPhaser);
  curveVertex(-15, -2*millisPhaser);
  curveVertex(-10, 2*millisPhaser);
  curveVertex(-5, -2*millisPhaser);
  curveVertex(0, 2*millisPhaser);
  curveVertex(5, -2*millisPhaser);
  curveVertex(10, 2*millisPhaser);
  curveVertex(15, -2*millisPhaser);
  curveVertex(20, 2*millisPhaser);
  endShape();

  pop();

}

// Island

function draw_island() {
  colorMode(HSB, 100);

  push();
  
  translate(width/2, height*1.7);
  scale(1);

  strokeWeight(0);

  // sand
  fill(15, 50, 100);
  ellipse(0, 0, height*2);

  // grass
  fill(25, 60, 80);
  ellipse(0, 0, height*1.8);

  pop();
}

// Cars

class Car {
  constructor(number, hue) {
    this.number = number;
    this.hue = hue;
  }
}

const randomHues = [32, 87, 41, 67, 19, 95, 7, 99, 83, 12, 56, 76, 9, 50, 3, 68, 60, 80, 64, 84, 43, 14, 90, 15, 62, 74, 39, 92, 6, 33, 25, 73, 47, 94, 81, 96, 27, 49, 21, 10, 79, 26, 29, 53, 31, 70, 5, 91, 18, 1, 97, 38, 66, 11, 22, 86, 72, 93, 98, 85, 8, 58, 54, 36]
const cars = [];

function updateCars(millis, seconds, minutes) {

  if(cars.length == 0) {
    for(let i = 1; i <= 60; i++){
      cars.push(new Car(i, randomHues[i]))
    }

    for(let i = 0; i < cars.length; i++){
      (print(cars[i].number));
    }
  }

  for(let i = 0; i < 60; i++) {

    strokeWeight(0);

    push(); 
    translate(500+seconds-50*cars[i].number, height/2); 

    fill(0);         
    ellipse(-9, 9, 8);
    ellipse(9, 9, 8);
    ellipse(-9, -9, 8);
    ellipse(9, -9, 8);

    rectMode(RADIUS);

    fill(cars[i].hue, 100, 100);
    rect(0, 0, 15, 10);

    fill(60, 50, 100);
    rect(-10, 0, 1, 8);
    rect(5, 0, 3, 8);

    rotate(PI/2);
    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(cars[i].number.toString(), 0, 4);
    pop();

  }

}
