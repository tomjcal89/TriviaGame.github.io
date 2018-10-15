
// make a selection of var's for the game
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var time = 9;
var intervalId;


// make an array of answers for the game?
var answers = ["300", "Turkey", "New York"];

//hide all questions and timer until the "start" button is clicked
$(".hidden, .secondHidden").hide();

//showing all elements besides final score and reset button
$("#startId").click(function () {
    run()
    $(".hidden").show();
    $("#startId").hide();
    
});

$("#doneId").click(function () {
    $(".secondHidden").show();
    $(".hidden").hide();
});

//timer that starts counting down on a new page once the "start" button was clicked

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function decrement() {
    $(".timerClass").text("Time Remaining: " + time + " Seconds");
    time--;

    if (time === -1) {
        $(".secondHidden").show();
        $(".hidden").hide();
    }
}




//show the listed questions after the stat button is clicked

//tally the correct, incorrect and unanswered questions


//when the "Finished!" button is clicked, new page will show tallying "correct", "incorrect" and unanswered questions


