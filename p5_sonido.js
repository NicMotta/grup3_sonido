
let sonido_1, sonido_2, sonido_3, sonido_4;
let volumen_1, volumen_2, volumen_3, volumen_4;
let color_1, color_2, color_3, color_4;
let panneo;
let inicio;

let texto = "Grup3";
let texto_2 = "Amawta Relmu - Francesca Cantore - Máximo Sanchez Granel - Nic Motta"
let texto_3 = "Lenguajes de las Artes Electrónicas: Sonido"
let texto_4 = "MAE - UNTREF - 2020"
let texto_5 = "CLICK PARA COMENZAR - SE RECOMIENDA EL USO DE AURICULARES Y ESTAR EN PANTALLA COMPLETA (F11)";

function preload() {

  sonido_1 = loadSound('assets/amawta.mp3'); // amawta
  sonido_2 = loadSound('assets/francesca.mp3'); // francesca
  sonido_3 = loadSound('assets/maximo.mp3'); // maximo
  sonido_4 = loadSound('assets/nic.mp3'); // nic
}


function setup() {

  createCanvas(window.innerWidth, window.innerHeight);

  sonido_1.loop();
  sonido_2.loop();
  sonido_3.loop();
  sonido_4.loop();


  background(50);

  inicio = 0;

  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER, CENTER);
  text(texto, width / 2, height / 2);
  text(texto_2, width / 2, (height / 2) + 50);
  textSize(28);
  text(texto_3, width / 2, (height / 2) + 100);
  textSize(24);
  text(texto_4, width / 2, (height / 2) + 150);
  fill(150);
  textSize(20);
  text(texto_5, width / 2, (height / 2) + 200);

}

function draw() {

  volumen_1 = map(mouseX, 0, displayWidth, 0, 1);
  volumen_2 = map(mouseY, 0, displayHeight, 0, 1);
  volumen_3 = map(mouseX, 0, displayWidth, 1, 0);
  volumen_4 = map(mouseY, 0, displayHeight, 1, 0);

  sonido_1.setVolume((volumen_3 + volumen_4) /2); //arriba izquierda
  sonido_2.setVolume((volumen_1 + volumen_4) /2); // arriba derecha
  sonido_3.setVolume((volumen_2 + volumen_3) /2); // abajo izquierda
  sonido_4.setVolume((volumen_1 + volumen_2) /2); // abajo derecha

  color_1 = map(volumen_1, 0, 1, 0, 255);
  color_2 = map(volumen_2, 0, 1, 0, 255);
  color_3 = map(volumen_3, 1, 0, 0, 255);
  color_4 = map(volumen_4, 1, 0, 0, 255);

  panneo = map(mouseX, 0, displayWidth, -0.6, 0.6);

  sonido_1.pan(panneo);
  sonido_2.pan(panneo);
  sonido_3.pan(panneo);
  sonido_4.pan(panneo);



  if (inicio == 1)
  {
  noFill();
  stroke(color_1, color_2, 255, 50);
  line(width / 2, height / 2, mouseX, mouseY);
  }

}


function mousePressed()
{
  getAudioContext().resume()
  background(50);
  inicio = 1;

  //noStroke();
  noFill();
  stroke(130);

  circle( displayWidth * 0.06, displayHeight * 0.1, 150);
  circle(displayWidth * 0.06, displayHeight * 0.9, 150);
  circle(displayWidth * 0.94, displayHeight * 0.1, 150);
  circle(displayWidth * 0.94, displayHeight * 0.9, 150);

  fill(130);
  noStroke();
  textSize(15);
  text("Amawta", displayWidth * 0.06, displayHeight * 0.1);
  text("Máximo", displayWidth * 0.06, displayHeight * 0.9);
  text("Francesca", displayWidth * 0.94, displayHeight * 0.1);
  text("Nic", displayWidth * 0.94, displayHeight * 0.9);
}
