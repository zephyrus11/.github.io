

const wordToGuess = 'bananas';

const wordState = [];

let guessesLeft = 10;

const prevGuesses = [];

function displayWordState(state){
	let output = '';

	for(let i = 0; i <state.length; i++){
		const char = state[i];
			output = output + char;
			output = output + " ";
	}


 const wordStateContainer = document.getElementById('word');
 wordStateContainer.innerHTML = output;
}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}


function displayPreviousGuesses(guessesArray){

	const list = document.getElementById('past-guesses');
	
	// clear list before adding guesses
	list.innerHTML = '';

	// for each guess, append a li child
	for(let i = 0; i < guessesArray.length; i++){

		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess);
	}
}
// takes in word to guess, the current state of the word and the new character to guess
function guess(wordToGuess, wordState, currGuess){
	// for each character in the word to be guessed
	for(let i = 0; i < wordToGuess.length; i++){
		// if the character matches the current guess,
		//update word state at that position
		if(wordToGuess[i] == currGuess){
			wordState[i] = currGuess;
		}
	}
	displayWordState(wordState);

	// check if user won
	const won = checkWon(wordState);
	if(won){
		window.alert('You won!');
	}
	

	// check if user has lost
	else if(guessesLeft == 0){
		window.alert("You lost!")
	}
}

function checkWon(wordState){
	let hasBlanks = false;
	for(let i = 0; i < wordState.length; i++){
		
		if(wordState[i] == '_'){
			hasBlanks = true;
		}
		
	}

	return !hasBlanks;
}

function setup(){
	for(let i = 0; i <wordToGuess.length; i++){
		wordState.push('_')
	}

	displayGuessesLeft(guessesLeft);
	displayWordState(wordState);
	displayPreviousGuesses(prevGuesses);
	
}

function setupForm(){
	const form = document.getElementById('player-input');
	const input = document.getElementById('player-guess');

	form.onsubmit = function(event){
		event.preventDefault();

		// get current guess
		const currentInput = input.value.toLowerCase();
		
		// clear the input after enter
		input.value='';

		// check if input is valid
		if(!validateInput(currentInput, prevGuesses)){
			window.alert('Please enter only single character from a-z that has not been guessed before.')
			return;
		}


		// update the previous guesses
		prevGuesses.push(currentInput);

		guessesLeft = guessesLeft - 1;
		displayGuessesLeft(guessesLeft);

		// make guesses
		guess(wordToGuess, wordState, currentInput);

		// update previous guesses
		displayPreviousGuesses(prevGuesses);
		console.log(input.value);
	}
}


function validateInput(guess, prevGuesses){
	// check that guess is one character


	// user has not guessed this before

	if(guess.length == 1 && prevGuesses.indexOf(guess) == -1){
		return true;
	}
return false;
}



setup();
setupForm()