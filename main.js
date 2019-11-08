var userS = 0;
var campS = 0;
var s = "s";
var p = "p";
var r = "r";
const userScore = $("#userScore");
const campScore = $("#campScore");
const rock = $("#rock");
const paper = $("#paper");
const scissors = $("#scissors");
const result = $("#result");

function randomChoices() {
	var choices = ["r", "p", "s"];
	var randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

var drawcounter = 0;
function draw() {
	drawcounter++;
	result.html("it's Draw " + drawcounter + " times in this turn, you picked the same choice as the computer.")
	
}

function win() {
	if (userS < 5) {
	userS++;
	result.html("You Win this time.");
	userScore.html(userS);
	}
	if ( userS >= 5) {
		userS = 0;
		campS = 0;
		result.html("you win the turn, you can try an other turn.");
		userScore.html(userS);
		alert("you win the turn, you can try an other turn.");
		drawcounter = 0;

	}
}

function loss() {
	if (campS < 5) {
		campS++;
		result.html("You lost this time.");
		campScore.html(campS);
	}
	if (campS >= 5) {
		campS = 0;
		userS = 0;
		result.html("you lost the turn, you can try an other turn");
		campScore.html(campS);
		userScore.html(userS);
		alert("you lost the turn, you can try an other turn.");
		drawcounter = 0;
	}
}

$('.clickchoice').click(function() {
	var choice = $(this).attr('id');
	var compchoice = randomChoices();
	if (choice === "rock") {
		
		if (compchoice === "p") {
			loss();
		}
		if (compchoice === "s") {
			win();
		}
		else {
			draw();
		}
	}
	if (choice === "paper") {
		if (compchoice === "s") {
			loss();
		}
		if (compchoice === "r") {
			win();
		}
		else {
			draw();
		}
	}
	if (choice === "scissors") {
		if (compchoice === "r") {
			loss();
		}
		if (compchoice === "w") {
			win();
		}
		else {
			draw();
		}
	}

});


// $("#rock").on("click", function() {
// 	randomChoices()
	
// 	if(r === randomChoices()) {
// 		draw();
// 	} 
// 	if (p === randomChoices()) {
// 		function loss() {
// 			if (campS < 5) {
// 				campS++;
// 				result.html("You lost this time, you choose ROCK/ computer picked PAPER.");
// 				campScore.html(campS);
// 			}
// 			if (campS >= 5) {
// 				campS = 0;
// 				userS = 0;
// 				result.html("you lost the turn, you can try an other turn");
// 				campScore.html(campS);
// 				userScore.html(userS);
// 			}
// 		}
// 		loss();
// 	}
// 	if (p === randomChoices()) {
// 		function win() {
// 			if (userS < 5) {
// 			userS++;
// 			result.html("You Win this time, you choose ROCK/ computer picked SCISSORS.");
// 			userScore.html(userS);
// 			}
// 			if ( userS >= 5) {
// 				userS = 0;
// 				campS = 0;
// 				result.html("you win the turn, you can try an other turn");
// 				userScore.html(userS);
// 				alert("you win the turn, you can try an other turn");
// 			}
// 		}
// 		win();
// 	}
// });

// $("#paper").on("click", function() {
// 	randomChoices()
	
// 	if(p === randomChoices()) {
// 		draw();
// 	} 
// 	if (r === randomChoices()) {
// 		function loss() {
// 			if (campS < 5) {
// 				campS++;
// 				result.html("You lost this time, you choose PAPER/ computer picked SCISSORS.");
// 				campScore.html(campS);
// 			}
// 			if (campS >= 5) {
// 				campS = 0;
// 				userS = 0;
// 				result.html("you lost the turn, you can an try other turn");
// 				campScore.html(campS);
// 				userScore.html(userS);
// 			}
// 		}
// 		loss();
// 	}
// 	if (p === randomChoices()) {
// 		function win() {
// 			if (userS < 5) {
// 			userS++;
// 			result.html("You Win this time, you choose PAPER/ computer picked ROCK.");
// 			userScore.html(userS);
// 			}
// 			if ( userS >= 5) {
// 				userS = 0;
// 				campS = 0;
// 				result.html("you win the turn, you can try an other turn");
// 				userScore.html(userS);
// 				campScore.html(campS);

// 			}
// 		}
// 		win();
// 	}
// });

// $("#scissors").on("click", function() {
// 	randomChoices()
	
// 	if(s === randomChoices()) {
// 		draw();
// 	} 
// 	if (r === randomChoices()) {
// 		function loss() {
// 			if (campS < 5) {
// 				campS++;
// 				result.html("You lost this time, you choose SCISSORS/ computer picked ROCK.");
// 				campScore.html(campS);
// 			}
// 			if (campS >= 5) {
// 				campS = 0;
// 				userS = 0;
// 				result.html("you lost the turn, you can try other turn");
// 				campScore.html(campS);
// 				campScore.html(campS);
// 			}
// 		}
// 		loss();

// 	}
// 	if (p === randomChoices()) {
// 		function win() {
// 			if (userS < 5) {
// 			userS++;
// 			result.html("You Win this time, you choose SCISSORS/ computer picked PAPER.");
// 			userScore.html(userS);
// 			}
// 			if ( userS >= 5) {
// 				userS = 0;
// 				campS = 0;
// 				result.html("you win the turn, you can try an other turn");
// 				userScore.html(userS);
// 				campScore.html(campS);
// 				alert("you win the turn, you can try an other turn");
// 			}
// 		}
// 		win();
// 	}
// });

