//ator
let yAtor = 550;
let xAtor = 60;
let larguraAtor = 50;
let alturaAtor = 50;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }

  // Mantem o ator dentro dos limites verticais do canvas.
  yAtor = constrain(yAtor, 0, 550);
}

function verificaColisao() {
  for (let i = 0; i < imagemCarro.length; i++) {
    const colisao = collideRectRect(
      xCarros[i],
      yCarros[i],
      larguraCarro,
      alturaCarro,
      xAtor,
      yAtor,
      larguraAtor,
      alturaAtor,
    );

    if (colisao) {
      voltaAtorParaPosicaoInicial();
      break;
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 550;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color("red"));
  text(meusPontos, width / 5, 35);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}