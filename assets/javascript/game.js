var triesCounter = 15;
var dictionary = ["picard", "crusher", "worf","data","enterprise", "starfleet", "federation", "klingon", "vulcan", "duras", "serak", "guinan", "gordi", "troi", "riker"];

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
	}




