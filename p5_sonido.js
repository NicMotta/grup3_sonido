let sonido_1;
let sonido_2;
let sonido_3;
let sonido_4;

let volumen_1;
let volumen_2;
let volumen_3;
let volumen_4;

let color_1;
let color_2;
let color_3;
let color_4;

function preload() {
  
  sonido_1 = loadSound('assets/sonido_1.mp3');
  sonido_2 = loadSound('assets/sonido_2.mp3');
  sonido_3 = loadSound('assets/sonido_3.mp3');
  sonido_4 = loadSound('assets/sonido_4.mp3');
}


function setup() {
  
  createCanvas(displayWidth -1, displayHeight -1);
  
  sonido_1.loop();
  sonido_2.loop();
  sonido_3.loop();
  sonido_4.loop();
  
  
  background(80);
}

function draw() {
  
  
  
  volumen_1 = map(mouseX, 0, displayWidth, 0, 1);
  volumen_2 = map(mouseY, 0, displayHeight, 0, 1);
  volumen_3 = map(mouseX, 0, displayWidth, 1, 0);
  volumen_4 = map(mouseY, 0, displayHeight, 1, 0);
 
  sonido_1.setVolume((volumen_3 + volumen_4) /2);
  sonido_2.setVolume((volumen_1 + volumen_4) /2);
  sonido_3.setVolume((volumen_2 + volumen_3) /2);
  sonido_4.setVolume((volumen_1 + volumen_2) /2);  
  
  color_1 = map(volumen_1, 0, 1, 0, 255);
  color_2 = map(volumen_2, 0, 1, 0, 255);
  color_3 = map(volumen_3, 1, 0, 0, 255);
  
  color_4 = map(volumen_4, 1, 0, 200, 800);
   
  noFill();
  stroke(color_1, color_2, color_4, 50);
  line(width / 2, height / 2, mouseX, mouseY);
  
}
