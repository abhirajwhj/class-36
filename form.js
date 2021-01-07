class Form{
    constructor(){
        
    }
    display(){
    var title=createElement('h2');
    title.html("CAR RACE GAME");
    title.position(350,100);
    var input=createInput('Name');
    input.position(350,150);
    var button=createButton('PLAY');
    button.position(350,200);
    var greeting=createElement('h3');
    greeting.html("HELLO "+'Name');
    }
}