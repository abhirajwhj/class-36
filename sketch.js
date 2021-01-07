var database,gameOb,gameState,player1,playerCount,form;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  gameOb = new Game();
  gameOb.getGameState();
  gameOb.start();
}

function draw(){
  background("white");
  
}

