//principal
function setup() {
  createCanvas(600, 600);
}

//desenha os elementos na tela
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
}




