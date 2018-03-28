let pieces = document.querySelectorAll(".boxes")
let winnerThatWon = document.querySelector(".winner")
let gameEnd= false;

const size = 3;
const x = 'X'
const o = 'O'
let player = 1; // player 1 is true then player 2 is false
let oCount = 0;
let xCount = 0;
let oSel = [];
let xSel = [];
let winner = [
 	[0, 1, 2],
 	[3, 4, 5],
 	[6, 7, 8],
 	[0, 3, 6],
 	[1, 4, 7],
 	[2, 5, 8],
 	[0, 4, 8],
	[2, 4, 6]
]



for(let i = 0; i < pieces.length; i++){
	pieces[i].onclick = function(event){
		
				if(event.target.innerHTML == o || event.target.innerHTML == x){
						alert("space taken!");
						return;
				}
		if (gameEnd == false) {
					if(player == 1){
					console.log(oCount);
					event.target.innerHTML = o
					event.target.style.color = 'navy';
					oCount += 1;
					if(oCount >= size) {checkWin()};
					player = 0;

			
					}	else {
						console.log(xCount);
						event.target.innerHTML = x;
						event.target.style.color = 'red';
						xCount +=1;
						if(xCount >= size) {checkWin()};
						player = 1;
			
			}
		}
		 	else {
					console.log("gameEnd")
					alert("Refresh to play again!")
				}
	}
}

function checkWin(){
	for(let w = 0; w < winner.length; w++){

		if((pieces[winner[w][0]].innerHTML == o) && (pieces[winner[w][1]].innerHTML == o) && (pieces[winner[w][2]].innerHTML == o)){
			winnerThatWon.innerHTML = "Player 1 Won!";
			gameEnd = true;
		}

		else if ((pieces[winner[w][0]].innerHTML == x) && (pieces[winner[w][1]].innerHTML == x) && (pieces[winner[w][2]].innerHTML == x)){
			winnerThatWon.innerHTML = "Player 2 Won!";
			gameEnd = true;
			
		}

	} 
	return;
}