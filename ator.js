//ator
let yAtor = 550;
let xAtor = 60;
let larguraAtor = 50;
let alturaAtor = 50;
let meusPontos = 0;
let vidas = 3;
let animacaoPlacar = 0;

const detectarColisaoRetangulos =
  typeof collideRectRect === "function"
    ? collideRectRect
    : function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
      };

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  const atorMovendo = keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW);

  if (atorMovendo && trilhaSonora && !trilhaSonora.isPlaying()) {
    userStartAudio();
    trilhaSonora.loop();
  }

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
    const colisao = detectarColisaoRetangulos(
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
      vidas -= 1;

      if (meusPontos > 0) {
        meusPontos -= 1;
      }

      somColisao.play();

      if (vidas <= 0) {
        encerraJogo();
      }

      break;
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 550;
}

function incluiPontos() {
  const placarX = 16;
  const placarY = 10;
  const placarLargura = 210;
  const placarAltura = 92;
  const brilhoAtivo = animacaoPlacar > 0;

  if (animacaoPlacar > 0) {
    animacaoPlacar -= 1;
  }

  push();
  fill(20, 20, 20, 175);
  stroke(255, 210, 0);
  strokeWeight(2);
  rect(placarX, placarY, placarLargura, placarAltura, 10);

  if (brilhoAtivo) {
    const alphaBrilho = map(animacaoPlacar, 0, 14, 0, 95);
    noStroke();
    fill(255, 235, 120, alphaBrilho);
    rect(placarX - 4, placarY - 4, placarLargura + 8, placarAltura + 8, 12);
  }

  noStroke();
  fill(255, 220, 60);
  textAlign(LEFT, TOP);
  textSize(14);
  text("PONTOS", placarX + 12, placarY + 8);

  fill(255);
  textSize(brilhoAtivo ? 31 : 28);
  text(meusPontos, placarX + 12, placarY + 24);

  textSize(14);
  fill(255, 220, 60);
  text("VIDAS: " + vidas, placarX + 12, placarY + 62);
  text("RECORDE: " + recorde, placarX + 98, placarY + 62);
  pop();
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    animacaoPlacar = 14;
    atualizaRecorde();
    somPontos.play();
    voltaAtorParaPosicaoInicial();
  }
}