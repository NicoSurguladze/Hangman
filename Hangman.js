runGame();

function removeMenu() {
    document.getElementById('gameStatus').style.display = "none";
    const keyboard = document.getElementsByClassName("gameButton");
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].disabled = false;
    }
    document.getElementById('cowboy1').style.display = "none";
    document.getElementById('cowboy2').style.display = "none";
    document.getElementById('cowboy3').style.display = "none";
    document.getElementById('cowboy4').style.display = "none";
    document.getElementById('cowboy5').style.display = "none";
    document.getElementById('cowboy6').style.display = "none";
   
}

function disableKeyBoard() {
    const keyboard = document.getElementsByClassName("gameButton");
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].disabled = true;
    }
}



function runGame() {

let word = randomWord();
let count = 0;
console.log(word);
let placeholder = getPlaceholder(word);
document.getElementById('wordToBeGuessed').innerHTML = placeholder.split('').join(' ');
const keyboard = document.getElementsByClassName("gameButton");

for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener("click", function() {
        let userInput = keyboard[i].value;
        if (word.includes(userInput)) {
            updatePlaceHolder(userInput);
        } else {
            missedGuess(userInput);
        } 
            endGame();
            keyboard[i].disabled = true;
    })
}



function randomWord() {
    let words = ["ant", "baboon", "badger", "bat", "bear", "beaver", "camel",
    "cat", "clam", "cobra", "cougar", "coyote", "crow", "deer",
    "dog", "donkey", "duck", "eagle", "ferret", "fox", "frog", "goat",
    "goose", "hawk", "lion", "lizard", "llama", "mole", "monkey", "moose",
    "mouse", "mule", "newt", "otter", "owl", "panda", "parrot", "pigeon", 
    "python", "rabbit", "ram", "rat", "raven","rhino", "salmon", "seal",
    "shark", "sheep", "skunk", "sloth", "snake", "spider", "stork", "swan",
    "tiger", "toad", "trout", "turkey", "turtle", "weasel", "whale", "wolf",
    "wombat", "zebra"];

    let index = Math.floor(Math.random() * words.length);
    return words[index];
}


function getPlaceholder(word) {
    let placeHolder = "";
    for (let i = 0; i < word.length; i++) {
        placeHolder += '_';
        
    }
    return placeHolder;
}


function updatePlaceHolder(userInput) {
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === userInput) {
            placeholder = placeholder.substring(0, i) + userInput + placeholder.substring(i + userInput.length);
            for (let j = i; j < word.length; j++) {
                if (word.charAt(j) === userInput) {
                    placeholder = placeholder.substring(0, j) + userInput + placeholder.substring(j + userInput.length);
    
                }
            }
            document.getElementById('wordToBeGuessed').innerHTML = placeholder.split('').join(' ');
        } 
    }
}


function missedGuess(userInput) {
    console.log(userInput);
    count++;
    switch(count) {
        case 1: 
        document.getElementById('cowboy1').style.display = "block";
        break;
        case 2: 
        document.getElementById('cowboy2').style.display = "block";
        break;
        case 3: 
        document.getElementById('cowboy3').style.display = "block";
        break;
        case 4: 
        document.getElementById('cowboy4').style.display = "block";
        break;
        case 5: 
        document.getElementById('cowboy5').style.display = "block";
        break;
        case 6: 
        document.getElementById('cowboy6').style.display = "block";
        break;    
    }
    console.log(count);
}

function endGame() {
    if (count === 6) {
        disableKeyBoard();
        setTimeout(showMenu, 800);
        function showMenu() {
            document.getElementById('gameStatus').style.display = "block";
            word = undefined;
            placeholder = undefined;
        }
        document.getElementById('message').innerHTML = 'Game Over';
    } else if (placeholder === word) {
        document.getElementById('gameStatus').style.display = "block";
        document.getElementById('message').innerHTML = 'You Win';
        disableKeyBoard();
        word = undefined;
        placeholder = undefined;
    }
}

    
}


