let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//carro
let yCarro = 60;
let xCarro = 600;
let larguraCarro = 100;
let alturaCarro = 50;

//ator
let yAtor = 550;
let xAtor = 60;
let larguraAtor = 50;
let alturaAtor = 50;


function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/boneconeve.png");
  imagemCarro = loadImage("imagens/carro1.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
}

function movimentaCarro() {
  xCarro -= 2;
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}
