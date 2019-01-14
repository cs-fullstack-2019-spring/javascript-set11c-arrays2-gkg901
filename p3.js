//Ask the user to enter a word to add to an array. Add the user input into the array. If the user enters a 'q', stop asking them to enter a word.

var words = [];






while  ( true) {
    var input = prompt("enter a word to add");
    if (input === "q")
        break;
    else
       words.push(input);
}


console.log(words);


