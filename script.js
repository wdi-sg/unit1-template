console.log("hello script js");
/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
*/

//create game that guess a secret word
//secret word = cat
//array of cat = ["c", "a", "t"]

//each time user guess wrong

//Part 1
/*
var arrayOfCat = ["c", "a", "t"];
var cat = [];
console.log("Guess the letter of the word!");
console.log("Hint: I can wild, lazy, annoying, lovely but not men best friend");

var wordC = arrayOfCat[0];
var wordA = arrayOfCat[1];
var wordT = arrayOfCat[2];

var wordFound = false;

var i = 10;

var inputHappened  = function(letter){
    while(i > 0){

            if (letter == wordC){
                wordFound = true;

                console.log("You guess the first letter of the word");
            }
            else if(letter == wordA){
                wordFound = true;
                console.log("You guess the second letter of the word");
            }
            else if(letter == wordT){
                wordFound = true;
                console.log("You guess the third letter of the word");
            }
            else{
                console.log("Sorry. Please guess again.");
            }
        }
        else{

        }
    i = i - 1;
    console.log(i + ": No. of tries left");
    break;
    }
}
*/
//Just for cat
var arrayOfCat = ["c", "a", "t"];
var cat = [];
var wordC = arrayOfCat[0];
var wordA = arrayOfCat[1];
var wordT = arrayOfCat[2];
var wordFound = false;
var i = 10;

console.log("Guess the letter of the word!");
display("Guess the letter of the word!");
console.log("Hint: I can wild, lazy, annoying, lovely but not men best friend");
display2("Hint: I can wild, lazy, annoying, lovely but not men best friend");
display3("You have 10 tries before your luck runs out");

var inputHappened  = function(letter){
    while(i > 0){
        if (letter == wordC){
            wordFound = true;
            console.log("You guess the first letter of the word");
            display("You guess the first letter of the word");
            cat.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left");
            display3(i + ": No. of tries left");
            if(cat.length === 3){
                console.log("You win the guessing game. The word is cat.");
                display2("You win the guessing game. The word is cat.");
            }
            else{
                console.log("Please guess the next word");
                display2("Please guess the next word");
            }
        }
        else if(letter == wordA){
            wordFound = true;
            console.log("You guess the second letter of the word");
            display("You guess the second letter of the word");
            cat.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(cat.length === 3){
                console.log("You win the guessing game. The word is cat.");
                display2("You win the guessing game. The word is cat.");
            }
            else{
                console.log("Please guess the next word");
                display2("Please guess the next word");
            }
        }
        else if(letter == wordT){
            wordFound = true;
            console.log("You guess the third letter of the word");
            display("You guess the third letter of the word");
            cat.push(letter);
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            if(cat.length === 3){
                console.log("You win the guessing game. The word is cat.");
                display2("You win the guessing game. The word is cat.");

            }
            else{
                console.log("Please guess the next word");
                display2("Please guess the next word");
            }
        }
        else{
            i = i - 1;
            console.log(i + ": No. of tries left")
            display3(i + ": No. of tries left");
            console.log("Sorry. Please guess again.");
            display2("Sorry. Please guess again.");
        }
    break;
    }
}