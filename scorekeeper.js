var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
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
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
	
});