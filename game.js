class Game{
    constructor(){

    }
    getGameState(){
    var gameStateref=database.ref("GameState") ;
    gameStateref.on("value",function (data)
    {
        gameState=data.val();
    })   
    }
    start(){
    console.log("gameStarted");
    player1=new Player();
    player1.getPlayerCount();
    form=new Form();
    form.display();
    }
}