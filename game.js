var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
var keypress = 0;
var level = 0;
function nextSequence(){
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    //console.log("Choosen color is: "+randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log("Game Pattern Array is: "+gamePattern);
    $('#'+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    $("#heading2-tag").html('level '+level);
}
//nextSequence();
$(".btn").click(function (){
    var userChosenColour = this.id;
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log("User Clicked Pattern is "+userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
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
$(document).keypress(function(){
    if(keypress==0){
        nextSequence();
        keypress++;
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        console.log("Matched - Success");
        if (userClickedPattern.length==gamePattern.length) {
            setTimeout(function() {
                nextSequence();
              }, 1000);
              userClickedPattern = [];
        }
    }else{
        console.log("Matched - Wrong");
    }
}
