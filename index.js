$(".ab").hover(function(){
    $(".ab").animate({
        width:"150px",
        height:"150px"});
});

$(".bc").hover(function(){
    $(".bc").animate({
        width:"150px",
        height:"150px"});
});


$(".cd").hover(function(){
    $(".cd").animate({
        width:"150px",
        height:"150px"});
});

$(".abc").hover(function(){
    $(".abc").animate({
        width:"150px",
        height:"150px"});
});

$(".acd").hover(function(){
    $(".acd").animate({
        width:"150px",
        height:"150px"});
});




var buttonColours = ["red", "blue", "green", "yellow","pink"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$("#bt").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      // alert("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          
          nextSequence();
        }, 1000);

      }

    } else {
      $("#level-title").text("Game Over")
      var audio = new Audio("./sounds/wrong.mp3");
      audio.play();
      restart();

$("body").addClass("game-over");
setTimeout(function () {
  $("body").removeClass("game-over");
  }, 1000);
}
   
      // alert("wrong");
}


function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 6);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(1000).fadeOut(1000).fadeIn(1000);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 1000);
}

function restart(){ var gamePattern = [];
var started = false;
var level = 0;
$("#level-title").text("You can restart the game");
}


