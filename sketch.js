var jake,jake_ani;

var linha,linha2;

var borda;


function preload(){
  //imagens pré-carregadas
  
  jake_ani = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  
}

function setup(){
  createCanvas(400,500);
  //crie os sprites aqui
  
  jake = createSprite(200,410,10,10);
  jake.addAnimation("running",jake_ani);
  jake.debug = false;
  jake.setCollider("circle",0,0,30);
  
  borda = createEdgeSprites();
}

function draw() {
  background("black");
  
  jake.collide(borda);
  jake.x = mouseX;
  
  criarlinha();
  
  drawSprites();
  
}

function criarlinha(){
  
  if (frameCount % 50 === 0){
    
    linha = createSprite(130,0,15,100);
    linha.velocityY = 7;
    linha.shapeColor = "white";
    
    linha2 = createSprite(270,0,15,100);
    linha2.velocityY = 7;
    linha2.shapeColor = "white";
    
    linha.lifetime = 100;
    linha2.lifetime = 100;
    
    jake.depth = linha.depth;
    jake.depth = linha2.depth;
    jake.depth = jake.depth +1
  }
  
  
  
}