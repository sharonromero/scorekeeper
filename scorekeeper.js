var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput  = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
// gameOver starts as false because gameOver is not true at the beginning of the game.
var gameOver = false;
// winningScore is what we're going to compare player 1 and player 2's score to. It'll check if either player has reached the winning score. If she has then we'll say game over is true.
var winningScore = 5;

p1Button.addEventListener("click", function(){
	// This says if gameOver has not been reached yet then we'll let you add to the score.
	if(!gameOver){
		p1Score++;
		// This says if the score is identical to winningScore then it'll prevent you from adding more to the score.
		if(p1Score === winningScore){
			p1Display.classList.add("winner"); // Turns the score green when it reaches 5.
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
	
});

// Resets the score to 0 and removes the winner class from the score so the score doesn't stay green.
resetButton.addEventListener("click", function(){
	reset(); 
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	// Sets gameOver to false so we can play the game again without refreshing the browser. 
	// If this isn't there then the Player One and Player Two buttons don't work unless we refresh the browser.
	gameOver = false;
}

// Used change event instead of click event because if the user types a number into the box manually, it didn't work properly, no event is fired.
// Change runs anytime the value changes. It doesn't matter how that value is changed, whether it's manually or using the little up and down arrows in the box.
// this in code below, refers to whatever the event was listening on, which in this case, is numInput. Could also just write numInput instead of this (e.g. numInput.value).
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

var lis = document.querySelectorAll("li");

// Uses a loop to set up the events.
for(var i = 0; i < lis.length; i++){
	// Changes list item color to purple when mouse hovers over the list item.
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});
	// Changes list item color back to black when mouse leaves the list item.
	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});
	// Crosses out list item and changes font color to gray when list item is clicked.
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");	
	});
}
