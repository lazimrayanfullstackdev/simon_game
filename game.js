var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];
//console.log("Choosen color is: "+randomChosenColour);
gamePattern.push(randomChosenColour);
//console.log("Game Pattern Array is: "+gamePattern);

function flash(){ 
    $('#'+randomChosenColour).fadeOut(800).fadeIn(800); 
 } 
 $('#'+randomChosenColour).ready(function(){ 
     setInterval('flash()',200); 
 });

//$('#'+randomChosenColour).fadeOut(900).delay(300).fadeIn(800);
