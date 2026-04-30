//carro
let yCarro = 60;
let xCarro = 600;
let larguraCarro = 100;
let alturaCarro = 50;

  
//carro
let yCarro2 = 160;
let xCarro2 = 600;
let larguraCarro2 = 100;
let alturaCarro2 = 50;

//carro
let yCarro3 = 260;
let xCarro3 = 600;
let larguraCarro3 = 100;
let alturaCarro3 = 50;

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
  image(imagemCarro2, xCarro2, yCarro2, larguraCarro2, alturaCarro2);
  image(imagemCarro3, xCarro3, yCarro3, larguraCarro3, alturaCarro3);
}

function movimentaCarro() {
  xCarro -= 2;
  xCarro2 -= 2;
  xCarro3 -= 2;
}