//constantes do carro
let larguraCarro = 100;
let alturaCarro = 50;

//carro
let yCarros = [60, 160, 230, 320, 400, 480];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2.2, 3.5, 4, 3, 1.6, 7.5];

//mostra o carro
function mostraCarro() {
  for (let i = 0; i < imagemCarro.length; i++) {
    image(imagemCarro[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

//movimenta o carro
function movimentaCarro() {
  for (let i = 0; i < imagemCarro.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
  //print(xCarros);
}

//volta o carro para a posição inicial
function voltaPosicaoInicialCarro() {
  for (let i = 0; i < imagemCarro.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -90;
}