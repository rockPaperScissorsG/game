var userS = 0;
var campS = 0;
const userScore = $("#userScore");
const campScore = $("#campScore");
const rock = $("#rock");
const paper = $("#paper");
const scissors = $("#scissors");
const result = $("#result");


function win() {
	if (userS < 5) {
		userS++;
		result.html("You Win this time.");
		userScore.html(userS);
	}
	if ( userS >= 5) {
		userS = 0;
		campS = 0;
		result.html("you win the turn, you can try other turn");
		userScore.html(userS);
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
		result.html("you lost the turn, you can try other turn");
		campScore.html(campS);
	}
}

function draw() {
	result.html("it's Draw, you can play one more time.")
}

$("#rock").on("click", function() {
	var random = Math.floor(Math.random() * 3);
	var r = 0;
	if(r === random) {
		draw();
	} 
	if (r < random) {
		loss();
	}else {
		win();
	}
});

$("#paper").on("click", function() {
	var random = Math.floor(Math.random() * 3);
	var r = 1;
	if(r === random) {
		draw();
	} 
	if (r < random) {
		loss();
	}else {
		win();
	}
});

$("#scissors").on("click", function() {
	var random = Math.floor(Math.random() * 3);
	var r = 3;
	if(r === random) {
		draw();
	} 
	if (r < random) {
		loss();
	}else {
		win();
	}
});

