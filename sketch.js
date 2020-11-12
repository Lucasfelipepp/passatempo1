var x = 170
var y = 100
var opcao = 1;
var tela = 0;

function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(220);
  if(tela==0)
     menu();
  if(tela==1) 
     fase1();
  if(tela==2)
    intrucoes();
  if(tela==3)
     Creditos();
}

function menu() {
  rect(x, y, 170, 45);
  
  textSize (40);
  text('PASSATEMPO',140,50);
  textSize (30);
  text('Jogar',220,130);
  text('Instruções',190,230);
  text('Créditos',210,330);
}

function fase1() {
  textSize (40);
  text('jogo em acao',140,50);
  
  
}

function Intrucoes() {
  textSize (40);
  text("Público alvo:2º ano do ensino fundamental",140,50);
  text('Consiste em analisar as mudanças e permanencias de um mesmo lugar a partir de várias imagens',140,50);
  
}

function Creditos() {
  textSize (10);
  text('EF02GE05) Analisar mudanças e permanências, comparando imagens de um mesmo lugar em diferentes tempos ',20,50);
  
  
}
  

function keyPressed() {
  if (key=="ArrowUp" && y>130) {
    y=y-100
    opcao=opcao-1;
    console.log(opcao)
  }
  if (key=="ArrowDown" && y<300) {
    y=y+100
    opcao=opcao+1
    console.log(opcao)
  }
  if (key=="Enter") {
      tela=opcao
  }
   if (key=="Escape") {
      tela=0
  }
}