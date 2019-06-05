$(document).ready(function() {

    var possibleWords = ["macarena", "whoomp", "smooth", "wild night", "do you sleep", "river of dreams", "every morning",
        "no rain", "unbelievable", "brick", "tennessee", "lump", "one week", "boombastic",
        "wonderwall", "man on the moon", "tears in heaven", "uninvited", "wannabe", "linger",
        "dont speak", "a girl like you", "", "good vibrations", "secret", "the train", "poison", "epic",
        "the humpty dance", "black or white", "summertime", "adia", "escapade", "connected", "waterfalls",
        "doo wop that thing", "no diggity", "whats up", "vogue", "fantasy", "believe"
    ];

    const maxGuess = 10;
    var pauseGame = false;

    var guessLetter = [];
    var guessingWord = [];
    var wordToMatch;
    var numGuess;
    var wins = 0;
    var losses = 0;
    var goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
    var badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3");
    var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
    var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");
    resetGame();

    // Wait for key press
    document.onkeypress = function(event) {
        // Make sure key pressed is an alpha character
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase());
        }
    }

    // Game Functions
    // Check if letter is in word & process
    function checkForLetter(letter) {
        var foundLetter = false;
        var correctSound = document.createElement("audio");
        var incorrectSound = document.createElement("audio");
        correctSound.setAttribute("src", "assets/sounds/stairs.mp3");
        incorrectSound.setAttribute("src", "assets/sounds/croak.mp3");

        // Search string for letter
        for (var i = 0, j = wordToMatch.length; i < j; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter;
                foundLetter = true;
                goodSound.play();
                // If guessing word matches random word
                if (guessingWord.join("") === wordToMatch) {
                    // Increment # of wins
                    wins++;
                    pauseGame = true;
                    winSound.play();
                    updateDisplay();
                    setTimeout(resetGame, 5000);
                } else if (numGuess === 0) {
                    // Increment # of losses
                    losses++;
                    pauseGame = true;
                    loseSound.play();
                    // Display word before reseting game
                    guessingWord = wordToMatch.split();
                    updateDisplay();
                    setTimeout(resetGame, 5000);
                }
            }
        }

        if (!foundLetter) {
            badSound.play();
            // Check if inccorrect guess is already on the list
            if (!guessLetter.includes(letter)) {
                // Add incorrect letter to guessed letter list
                guessLetter.push(letter);
                // Decrement the number of remaining guesses
                numGuess--;
                if (numGuess === 0) {
                    // Increment # of losses
                    losses++;
                    pauseGame = true;
                    loseSound.play();
                    // Display word before reseting game
                    guessingWord = wordToMatch.split();
                    updateDisplay();
                    setTimeout(resetGame, 5000);
                }
            } else if (numGuess === 0) {
                // Increment # of losses
                losses++;
                loseSound.play();
                // Display word before reseting game
                guessingWord = wordToMatch.split();
                pauseGame = true;
                updateDisplay();
                setTimeout(resetGame, 5000);
            }
        }

        updateDisplay();

    }
    // Check in keypressed is between A-Z or a-z
    function isAlpha(ch) {
        return /^[A-Z]$/i.test(ch);
    }

    function resetGame() {
        numGuess = maxGuess;
        pauseGame = false;

        // Get a new word
        wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
        console.log(wordToMatch);

        // Reset word arrays
        guessLetter = [];
        guessingWord = [];

        // Reset the guessed word
        for (var i = 0, j = wordToMatch.length; i < j; i++) {
            // Put a space instead of an underscore between multi word "words"
            if (wordToMatch[i] === " ") {
                guessingWord.push(" ");
            } else {
                guessingWord.push("_");
            }
        }

        // Update the Display
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById("totalWins").innerText = wins;
        document.getElementById("totalLosses").innerText = losses;
        document.getElementById("currentWord").innerText = guessingWord.join("");
        document.getElementById("remainingGuesses").innerText = numGuess;
        document.getElementById("guessedLetters").innerText = guessLetter.join(" ");
    }
})