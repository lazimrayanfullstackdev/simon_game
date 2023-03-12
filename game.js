var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern= [];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];
//console.log("Random Chosen Color is: "+randomChosenColour);
gamePattern.push(randomChosenColour);
$('#'+randomChosenColour).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400);
$('#'+randomChosenColour).click(function(){
    var tempSound = new Audio(`sounds/${randomChosenColour}.mp3`);
    tempSound.play();
});

$(".btn").click(function (){
    var userChosenColour = this.id;
    console.log("User Chosen Color is: "+userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

// $('#'+randomChosenColour).click( function (){
// setInterval(() => {
//      $('#'+randomChosenColour).fadeIn();
//      $('#'+randomChosenColour).fadeOut();
// }, 100);

// switch (randomChosenColour) {
//     case green:
//         var greenaudio = new Audio("sounds/green.mp3");
//         greenaudio.play();
//         break;

//     case red:
//     var redaudio = new Audio("sounds/red.mp3");
//     redaudio.play();
//     break;

//     case blue:
//         var blueaudio = new Audio("sounds/blue.mp3");
//         blueaudio.play();
//         break;

//     case yellow:
//     var yellowaudio = new Audio("sounds/yellow.mp3");
//     yellowaudio.play();
//     break;

//     default:
//     var wrongaudio = new Audio("sounds/wrong.mp3");
//     wrongaudio.play();        
//         break;
// }
// });
