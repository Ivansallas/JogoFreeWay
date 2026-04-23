//carro
let yCarro = 60;
let xCarro = 600;
let larguraCarro = 100;
let alturaCarro = 50;

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
}

function movimentaCarro() {
  xCarro -= 2;
}