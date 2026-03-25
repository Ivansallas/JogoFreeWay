# Jogo Freeway (p5.js)

Projeto simples inspirado no Freeway, desenvolvido com JavaScript e p5.js para praticar lógica de programação e animação 2D.

## Sobre o projeto

O jogo renderiza:
- uma estrada como plano de fundo;
- um personagem (ator) controlado pelo teclado;
- um carro em movimento horizontal.

Atualmente, o ator pode subir e descer e o carro se move da direita para a esquerda.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- p5.js

## Estrutura do projeto

- `index.html`: arquivo principal da página
- `style.css`: estilos básicos da página/canvas
- `sketch.js`: lógica do jogo (desenho e movimentação)
- `imagens/`: sprites usados no jogo
- `libraries/p5.min.js`: biblioteca p5.js
- `libraries/p5.sound.min.js`: extensão de som do p5.js

## Como executar

### Opção 1: VS Code + Go Live

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `index.html`.
3. Clique em **Go Live** no canto inferior direito.
4. O navegador abrirá automaticamente o jogo.

### Opção 2: Abrir direto no navegador

1. Clique duas vezes em `index.html`.
2. O jogo será carregado no navegador padrão.

## Controles

- Seta para cima: move o ator para cima
- Seta para baixo: move o ator para baixo

## Próximos passos sugeridos

- adicionar mais carros em faixas diferentes;
- criar colisão entre ator e carros;
- adicionar pontuação;
- limitar área de movimento do ator;
- reiniciar posição do carro ao sair da tela.
