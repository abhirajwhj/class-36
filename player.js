class Player{
    constructor(){
        
    }
    getPlayerCount(){
        var playerCountref=database.ref("PlayerCount") ;
        playerCountref.on("value",function (data)
        {
            playerCount=data.val();
        })   
    }
}