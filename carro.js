//constantes do carro
let larguraCarro = 100;
let alturaCarro = 50;

//carro
let yCarro = 60;
let xCarro = 600;
let velocidadeCarro = 2;
  
//carro2
let yCarro2 = 160;
let xCarro2 = 600;
let velocidadeCarro2 = 5;

//carro3
let yCarro3 = 230;
let xCarro3 = 600;
let velocidadeCarro3 = 3;

//mostra o carro
function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
  image(imagemCarro2, xCarro2, yCarro2, larguraCarro, alturaCarro);
  image(imagemCarro3, xCarro3, yCarro3, larguraCarro, alturaCarro);
}

//movimenta o carro
function movimentaCarro() {
  xCarro -= velocidadeCarro;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
  //print(xCarro);
}

//volta o carro para a posição inicial
function voltaPosicaoInicialCarro() {
  if (xCarro < -90) {
    xCarro = 600;
  }
  if (xCarro2 < -90) {
    xCarro2 = 600;
  } 
  if (xCarro3 < -90) {
    xCarro3 = 600;
  } 
}