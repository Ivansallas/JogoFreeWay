let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
//Trilha sonora
let trilhaSonora;
let somColisao;
let somPontos;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/boneconeve.png");
  imagemCarro = loadImage("imagens/carro1.png");
  imagemCarro2 = loadImage("imagens/carro2.png");
  imagemCarro3 = loadImage("imagens/carro3.png");
  imagemCarro4 = loadImage("imagens/carro4.png");
  imagemCarro5 = loadImage("imagens/carro5.png");
  imagemCarro6 = loadImage("imagens/carro6.png");

  imagemCarro = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4,
    imagemCarro5, imagemCarro6];

  trilhaSonora = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}
