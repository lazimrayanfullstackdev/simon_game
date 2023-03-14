var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    //console.log("Choosen color is: "+randomChosenColour);
    gamePattern.push(randomChosenColour);
    //console.log("Game Pattern Array is: "+gamePattern);
    $('#'+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
}
nextSequence();
$("button").click(function (){
    var userChosenColour = this.id;
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});
function playSound(name){
    var song = new Audio("sounds/"+name+".mp3");
    song.play();  
}
function animatePress(currentColour){
    $('#'+currentColour).addClass("pressed");
    setTimeout(function() {
        $('#'+currentColour).removeClass('pressed');
      }, 100);
}
