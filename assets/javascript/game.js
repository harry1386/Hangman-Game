var triesCounter = 15;
var dictionary = ["picard", "crusher", "worf","data","enterprise", "starfleet", "federation", "klingon", "vulcan", "duras", "serak", "guinan", "gordi", "troi", "riker"];
var guesses = []
//possibly set all the variables at the top, since that is apparently better formed

var word = getRandomWord();

function getRandomWord(){

	var ranNumber = Math.floor((Math.random() * dictionary.length -1) + 1);
	var word = dictionary[ranNumber];

	return word;

}

console.log(word);

function splitWord(word){

	var arrayOfLetters = word.split("");
	return arrayOfLetters;
}

var arrayWd = splitWord(word);

for (var i = 0; i < arrayWd.length; i++){
	console.log(arrayWd[i]);}

	console.log(arrayWd)


function letterChecker(choice, arrayOfLetters){
	if (arrayWd.indexOf(choice) != -1){
		console.log("correct");
	}
	else{
		console.log("wrong");
		triesCounter--;
		console.log(triesCounter);
	}
}

document.onkeyup = function(event){
	console.log(event.key);
	var choice = event.key;
	if (triesCounter > 0){
			letterChecker(choice, arrayWd);
		}
		else{
			triesCounter = 15;
			word = getRandomWord();
			arrayWd = splitWord(word);
			console.log("New word: " + word);
		}
		document.getElementById("counter").innerHTML = triesCounter;
	if(guesses.indexOf(choice) === -1){
			guesses.push(choice);
			document.getElementById("guesses").innerHTML = guesses.join(" ");
}
	}


function getNewWord(){
		guesses = [];
		arrayWd = [];
		dashesArr = [];	
		word = getRandomWord();
		arrayWd = splitWord(word);
		triesCounter = arrayWd.length + 5;
		document.getElementById("guesses").innerHTML = "Guesses Remaining: " + triesCounter;
		dashesArr = createDashesArray(arrayWd, dashesArr);
		document.getElementById("word").innerHTML = dashesArr.join(" ");	

}

/*var displayedAnswer = [];
for (var i = 0; i < arrayWd.length; i++) {
	if (arrayWd.charAt[i] !=' ') {
		displayedAnswer.push('_');
	}
	else{
	displayedAnswer.push(' ');
	}
}*/



