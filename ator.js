//ator
let yAtor = 550;
let xAtor = 60;
let larguraAtor = 50;
let alturaAtor = 50;

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
}