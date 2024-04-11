var playing = false;
var score;
var tr; // initial timing
var action;
var correct;
var correctPosition;
var wrongAnswer;

document.getElementById("startreset").onclick = function () {
    //if we are playing (START BUTTON)
    if (playing == true) {
        location.reload(); //reload page on reset button
    } else {
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        hide("over-popup");

        //Showing the timer
        show("time");
        tr = 20;
        document.getElementById("startreset").innerHTML = "Reset"; //Change start to reset
        startCountdown();

        //GENERATING NEW QUESTION
        QAgenerator();
    }
}

for (var i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correct) {
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                //generate new if correct 
                QAgenerator();
            } else {
                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

function startCountdown() {
    action = setInterval(function () {
        tr--;
        document.getElementById("time-remaining").innerHTML = tr;
        if (tr == 0) {
            stopCountdown();
            show("over-popup");
            document.getElementById("over-popup").innerHTML =
                "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start";
        }
    }, 1000); // Run the countdown every 1000 milliseconds (1 second)
}

function stopCountdown() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function QAgenerator() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correct = x * y;
    document.getElementById("question-box").innerHTML = x + "x" + y;

    correctPosition = 1 + Math.round(3 * Math.random());
    var targetId = "box" + correctPosition;
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.innerHTML = correct; // Fill one box with correct answer
    } else {
        console.error("Element with id", targetId, "not found!"); // Error message if element not found
    }

    for (var i = 1; i <= 4; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (wrongAnswer == correct); // Ensure wrongAnswer is not equal to correct
            document.getElementById("box" + i).innerHTML = wrongAnswer;
        }
    }
}
