var gamePattern= [];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
//console.log("Random Chosen Color is: "+randomChosenColour);
gamePattern.push(randomChosenColour);
//console.log(gamePattern);