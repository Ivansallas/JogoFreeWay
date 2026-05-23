//principal
function setup() {
  createCanvas(600, 600);
  //trilhaSonora.loop();
}

//desenha os elementos na tela
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialCarro();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




