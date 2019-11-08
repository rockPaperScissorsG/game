var userS = 0;
var campS = 0;
const userScore = $("#userScore");
const campScore = $("#campScore");
const rock = $("#Crock");
const paper = $("#Cpaper");
const scissors = $("#Cscissors");
const result = $("#result");

function randomChoices() {
	var choices = [rock, paper, scissors];
	var randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}


function draw() {
	result.html("it's Draw, you picked the same choice as the computer.");
	console.log("d")
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
		campScore.html(campS);
		alert("you win the turn, you can try an other turn.");
		drawcounter = 0;

	}
	console.log("w")
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
		
	}
	console.log("l")
}

$('.clickchoice').click(function() {
	var choice = $(this).attr('id');
	var compchoice = randomChoices();
	if (choice === "rock") {
		if (compchoice === paper) {
			loss();
			$("#rock").css("border", "3px solid red");
			setTimeout(function() {
				$("#rock").css("border", "0px solid red");
			}, 800);
			compchoice.css("border", "3px solid green");
			setTimeout(function() {
				compchoice.css("border", "0px solid green");
			}, 800);
		}
		if (compchoice === scissors) {
			win();
			$("#rock").css("border", "3px solid green");
			setTimeout(function() {
				$("#rock").css("border", "0px solid green");
			}, 800);
			compchoice.css("border", "3px solid red");
			setTimeout(function() {
				compchoice.css("border", "0px solid red");
			}, 800);
		}
		if (compchoice === rock) {
			draw();
			$("#rock").css("border", "3px solid grey");
			setTimeout(function() {
				$("#rock").css("border", "0px solid grey");
			}, 800);
			compchoice.css("border", "3px solid grey");
			setTimeout(function() {
				compchoice.css("border", "0px solid grey");
			}, 800);
		}

	}
	if (choice === "paper") {
		if (compchoice === scissors) {
			loss();
			$("#paper").css("border", "3px solid red");
			setTimeout(function() {
				$("#paper").css("border", "0px solid red");
			}, 800);
			compchoice.css("border", "3px solid green");
			setTimeout(function() {
				compchoice.css("border", "0px solid green");
			}, 800);
		}
		if (compchoice === rock) {
			win();
			$("#paper").css("border", "3px solid green");
			setTimeout(function() {
				$("#paper").css("border", "0px solid green");
			}, 800);
			compchoice.css("border", "3px solid red");
			setTimeout(function() {
				compchoice.css("border", "0px solid red");
			}, 800);
		}
		if (compchoice === paper) {
			draw();
			$("#paper").css("border", "3px solid grey");
			setTimeout(function() {
				$("#paper").css("border", "0px solid grey");
			}, 800);
			compchoice.css("border", "3px solid grey");
			setTimeout(function() {
				compchoice.css("border", "0px solid grey");
			}, 800);
		}
	}
	if (choice === "scissors") {
		if (compchoice === rock) {
			loss();
			$("#scissors").css("border", "3px solid red");
			setTimeout(function() {
				$("#scissors").css("border", "0px solid red");
			}, 800);
			compchoice.css("border", "3px solid green");
			setTimeout(function() {
				compchoice.css("border", "0px solid green");
			}, 800);
		}
		if (compchoice === paper) {
			win();
			$("#scissors").css("border", "3px solid green");
			setTimeout(function() {
				$("#scissors").css("border", "0px solid green");
			}, 800);
			compchoice.css("border", "3px solid red");
			setTimeout(function() {
				compchoice.css("border", "0px solid red");
			}, 800);
		}
		if (compchoice === scissors) {
			draw();
			$("#scissors").css("border", "3px solid grey");
			setTimeout(function() {
				$("#scissors").css("border", "0px solid grey");
			}, 800);
			compchoice.css("border", "3px solid grey");
			setTimeout(function() {
				compchoice.css("border", "0px solid grey");
			}, 800);
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

