//principal
let estadoJogo = "inicio";
let recorde = 0;

const botaoReiniciar = { x: 390, y: 10, w: 95, h: 34 };
const botaoSair = { x: 495, y: 10, w: 95, h: 34 };
const botaoJogarNovamente = { x: 190, y: 355, w: 220, h: 52 };

function setup() {
  createCanvas(600, 600);
  carregaRecorde();
}

//desenha os elementos na tela
function draw() {
  if (estadoJogo === "inicio") {
    desenhaTelaInicial();
    return;
  }

  if (estadoJogo === "gameover") {
    desenhaTelaGameOver();
    return;
  }

  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialCarro();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  desenhaBotoes();
}

function desenhaTelaInicial() {
  background(20, 120, 80);

  fill(0, 0, 0, 170);
  rect(60, 180, 480, 240, 16);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(46);
  text("Jogo Freeway", width / 2, 250);

  textSize(22);
  text("Pressione qualquer tecla", width / 2, 310);
  text("ou clique para iniciar", width / 2, 345);

  textSize(18);
  text("Recorde: " + recorde, width / 2, 390);
}

function iniciarJogo() {
  resetaJogo();
  estadoJogo = "jogando";
  userStartAudio();
}

function encerraJogo() {
  estadoJogo = "gameover";
  if (trilhaSonora && trilhaSonora.isPlaying()) {
    trilhaSonora.stop();
  }
}

function desenhaTelaGameOver() {
  background(45, 16, 16);

  fill(0, 0, 0, 170);
  rect(75, 130, 450, 320, 16);

  fill(255, 120, 120);
  textAlign(CENTER, CENTER);
  textSize(56);
  text("Game Over", width / 2, 200);

  fill(255);
  textSize(28);
  text("Pontos: " + meusPontos, width / 2, 265);
  textSize(22);
  text("Recorde: " + recorde, width / 2, 305);

  fill(255, 210, 70);
  rect(botaoJogarNovamente.x, botaoJogarNovamente.y, botaoJogarNovamente.w, botaoJogarNovamente.h, 10);
  fill(20);
  textSize(20);
  text("Jogar novamente", width / 2, botaoJogarNovamente.y + botaoJogarNovamente.h / 2);
}

function desenhaBotoes() {
  textAlign(CENTER, CENTER);
  textSize(14);

  fill(250, 220, 80);
  rect(botaoReiniciar.x, botaoReiniciar.y, botaoReiniciar.w, botaoReiniciar.h, 8);
  fill(20);
  text("Reiniciar", botaoReiniciar.x + botaoReiniciar.w / 2, botaoReiniciar.y + botaoReiniciar.h / 2);

  fill(235, 90, 90);
  rect(botaoSair.x, botaoSair.y, botaoSair.w, botaoSair.h, 8);
  fill(255);
  text("Sair", botaoSair.x + botaoSair.w / 2, botaoSair.y + botaoSair.h / 2);
}

function cliqueNoBotao(botao) {
  return (
    mouseX >= botao.x &&
    mouseX <= botao.x + botao.w &&
    mouseY >= botao.y &&
    mouseY <= botao.y + botao.h
  );
}

function resetaJogo() {
  const xInicial = 600;
  const espacamento = 140;

  meusPontos = 0;
  vidas = 3;
  yAtor = 550;
  animacaoPlacar = 0;

  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] = xInicial + i * espacamento;
  }
}

function carregaRecorde() {
  const recordeSalvo = localStorage.getItem("freewayRecorde");
  recorde = recordeSalvo ? Number(recordeSalvo) : 0;
}

function atualizaRecorde() {
  if (meusPontos > recorde) {
    recorde = meusPontos;
    localStorage.setItem("freewayRecorde", String(recorde));
  }
}

function keyPressed() {
  if (estadoJogo === "inicio") {
    iniciarJogo();
  }
}

function mousePressed() {
  if (estadoJogo === "gameover" && cliqueNoBotao(botaoJogarNovamente)) {
    iniciarJogo();
    return;
  }

  if (estadoJogo === "jogando" && cliqueNoBotao(botaoReiniciar)) {
    resetaJogo();
    return;
  }

  if (estadoJogo === "jogando" && cliqueNoBotao(botaoSair)) {
    estadoJogo = "inicio";
    if (trilhaSonora && trilhaSonora.isPlaying()) {
      trilhaSonora.stop();
    }
    return;
  }

  if (estadoJogo === "inicio") {
    iniciarJogo();
  }
}




