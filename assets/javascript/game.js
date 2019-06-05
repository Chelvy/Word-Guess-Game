$(document).ready(function() {

    var possibleWords = ["macarena", "whoomp", "I Will Always Love You", "Losing My Religion", "Smooth",
        "wild night", "do you sleep", "river of dreams", "every morning", "no rain", "unbelievable", "brick",
        "tennessee", "lump", "one week", "boombastic", "wonderwall", "man on the moon", "tears in heaven",
        "uninvited", "wannabe", "linger", "dont speak", "a girl like you", "", "good vibrations", "secret",
        "the train", "poison", "epic", "the humpty dance", "black or white", "summertime", "adia", "escapade",
        "connected", "waterfalls", "doo wop that thing", "no diggity", "whats up", "vogue", "fantasy", "believe"
    ];

    var possiblePictures = ["https://www.liveabout.com/thmb/3RfM-PoLfqryUaZt7YbZrMx_xHE=/500x0/filters:no_upscale():max_bytes(150000):strip_icc()/macarena-56a961cd3df78cf772a6737e.jpg", "https://www.liveabout.com/thmb/6fmgnyp8oWvAyZz9UmiYH_UwgV4=/264x0/filters:no_upscale():max_bytes(150000):strip_icc()/tagteam-56a95d983df78cf772a6449a.jpg", "https://www.liveabout.com/thmb/I38eGya6-bHF5sl20uLecb-tFzc=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/whitney-houston-i-will-always-love-you-56a968865f9b58b7d0fb2f80.jpg", "https://www.liveabout.com/thmb/jYZE03QTeuMtrSs59Gz1N4DZ8_I=/420x0/filters:no_upscale():max_bytes(150000):strip_icc()/losingmyreligion-56a95fb55f9b58b7d0fad4bc.jpg", "https://www.liveabout.com/thmb/zOEA5FYn-Wfs8f8PLsUHGBAKabw=/396x0/filters:no_upscale():max_bytes(150000):strip_icc()/robthomassmooth-56a962115f9b58b7d0faec57.jpg",
        "https://www.liveabout.com/thmb/WTcLmBmSlRZgz8WVuncgzT-y5Uc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/john-mellencamp-wild-night-56a968975f9b58b7d0fb2fe6.jpg", "https://www.liveabout.com/thmb/CfZy02M7fuuCkVz3u4sqC1WKYpA=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lisa-Loeb---Tails-58fe0d133df78ca159b53a2e.jpg", "https://www.liveabout.com/thmb/Q2EJNDcYYP0iO8YnxHdBnROg1Es=/1400x0/filters:no_upscale():max_bytes(150000):strip_icc()/Billy-Joel---River-Of-Dreams---Front-56a9662d3df78cf772a6a699.jpg", "https://www.liveabout.com/thmb/5yGiZ7KGuN34jPP5B7bJiijJsBA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sugar-Ray---Every-Morning-58fe0dbd3df78ca159b53c83.jpg", "https://www.liveabout.com/thmb/J9DF4og23e6MGFMPR0jrjL8mMhQ=/800x0/filters:no_upscale():max_bytes(150000):strip_icc()/blind-melon-no-rain-56a9688d5f9b58b7d0fb2fa5.jpg", "https://www.liveabout.com/thmb/nOv54yfpHULYfIv2uhia-bkxp-Y=/755x0/filters:no_upscale():max_bytes(150000):strip_icc()/EMF---Unbelievable-58fe0f183df78ca159b5441a.jpg", "https://www.liveabout.com/thmb/W-o9KtUuMncEumt8bIXHBpn9P_0=/799x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ben-Folds-Five---Brick-58fe11085f9b581d59a5a599.jpg",
        "https://www.liveabout.com/thmb/HuCaJPI2hPycpDjy6kS8FbOr4q8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Arrested-Development---Tennessee-58fe12d55f9b581d59a5d028.jpg", "https://www.liveabout.com/thmb/JK6c_C0SY9mv5KUUzBxjmy98Dg4=/962x0/filters:no_upscale():max_bytes(150000):strip_icc()/Presidents-of-the-United-States-of-America---Lump-58fe13465f9b581d59a5db0a.jpg", "https://www.liveabout.com/thmb/ldG-Llyi-wsbrieL542jeuSQbZY=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc()/Barenaked-Ladies---One-Week-58fe138f5f9b581d59a5e219.jpg", "https://www.liveabout.com/thmb/5ScgS4H4n8bN1FuKN-GI820Ekv0=/692x0/filters:no_upscale():max_bytes(150000):strip_icc()/Shaggy---Boombastic-58fe14b25f9b581d59a5f27a.jpg", "https://www.liveabout.com/thmb/eTamPQMFd5WLFh6t0Zwp5dMZK0M=/1080x0/filters:no_upscale():max_bytes(150000):strip_icc()/Oasis---Wonderwall-58fe16bc3df78ca159b5a86d.jpg", "https://www.liveabout.com/thmb/fOcSQU2A1E4EcLlGvNlH8SYemhQ=/953x0/filters:no_upscale():max_bytes(150000):strip_icc()/R.E.M.---Man-on-the-Moon-58fe17a95f9b581d59a5f96f.jpg", "https://www.liveabout.com/thmb/jxcrGIIOVgiTgTYVkGtVt-Jp9M4=/2043x0/filters:no_upscale():max_bytes(150000):strip_icc()/Eric-Clapton---Tears-In-Heaven-58fe18a93df78ca159b5b380.jpg",
        "https://www.liveabout.com/thmb/cSOmrHibCj0WlejY_XuFSvuF4_8=/241x0/filters:no_upscale():max_bytes(150000):strip_icc()/alanismorissette-56a961ff5f9b58b7d0faeb62.jpg", "https://www.liveabout.com/thmb/tPOG6R1PytxzwfANwT4qDYYqiq0=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc()/spice-girls-58fe1abc3df78ca159b5e10c.jpg", "https://www.liveabout.com/thmb/zIDG4sD4Yn9Mp9qpDbM-CbqZEd0=/306x0/filters:no_upscale():max_bytes(150000):strip_icc()/cranberries-56a9619e3df78cf772a67277.jpg", "https://www.liveabout.com/thmb/Jixz7h5TgfT_Nfw4C2CexcGrxVU=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/no-doubt-dont-speak-56a968945f9b58b7d0fb2fd1.jpg", "https://www.liveabout.com/thmb/MIoX0NLxAcsYd_3ulTNUrmon_xk=/808x0/filters:no_upscale():max_bytes(150000):strip_icc()/edwyn-collins-a-girl-like-you-56a968933df78cf772a6b9ed.jpg", "https://www.liveabout.com/thmb/Sw_hrSpQmLNDLjSjX5GqpQJyxk8=/500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goodvibrations-56b78a895f9b5829f839e401.jpg", "https://www.liveabout.com/thmb/sQarghb77UY_peV9rBuRuBFqkCI=/751x0/filters:no_upscale():max_bytes(150000):strip_icc()/madonna-secret-56a968923df78cf772a6b9e8.jpg",
        "https://www.liveabout.com/thmb/nAVQoXD47sfyyoVxziALOcckjhA=/240x0/filters:no_upscale():max_bytes(150000):strip_icc()/quadcitydjs-56a95d9b5f9b58b7d0fabaf9.jpg", "https://www.liveabout.com/thmb/5oy0hfBy7aBGU84DCEakIMEkP08=/500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bellbivdevoe-56a961855f9b58b7d0fae7a5.jpg", "https://www.liveabout.com/thmb/9OGa5_usK2l2nHdmq4IWmNbF_Uo=/421x0/filters:no_upscale():max_bytes(150000):strip_icc()/epic-56a961865f9b58b7d0fae7ab.jpg", "https://www.liveabout.com/thmb/tpDGSHGDLwgI2GGoMNsX73Tyua8=/240x0/filters:no_upscale():max_bytes(150000):strip_icc()/digitalunderground-56a961865f9b58b7d0fae7a8.jpg", "https://www.liveabout.com/thmb/XU3eM8lpkvqRZcrI2bfOtujQx0Y=/260x0/filters:no_upscale():max_bytes(150000):strip_icc()/blackorwhite-56a95f395f9b58b7d0face0e.jpg", "https://www.liveabout.com/thmb/cIEu6KIUIzC2-umCDmD1bscfn-Q=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/dj-jazzy-jeff-summertime-56a968915f9b58b7d0fb2fbe.jpg", "https://www.liveabout.com/thmb/xEPwQDscMV_H_Lz6d37TV8Q2wJM=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/sarah-mclachlan-adia-57bb740c3df78c87631e721c.jpg", "https://www.liveabout.com/thmb/9Rz2XOt3waZxTZbtvw9HVa-AFrM=/350x0/filters:no_upscale():max_bytes(150000):strip_icc()/escapade-57bb74085f9b58cdfd4b23fd.jpg",
        "https://www.liveabout.com/thmb/GVLHa8ILo3CHqvI5zZLvNNvS1-E=/800x0/filters:no_upscale():max_bytes(150000):strip_icc()/stereo-mcs-connected-56a9688e3df78cf772a6b9ca.jpg", "https://www.liveabout.com/thmb/ox8Ym_-Buu1OttrJFr7s2WzQC98=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/waterfalls-56a961a95f9b58b7d0fae88c.jpg", "https://www.liveabout.com/thmb/F5RosApNJ0OEJZw2HSJb_wFiYo0=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/lauryn-hill-doo-wop-57bb73fe3df78c87631e4dc5.jpg", "https://www.liveabout.com/thmb/FSxV5vaC3EFORmBcR-9_AxXDXUc=/600x0/filters:no_upscale():max_bytes(150000):strip_icc()/blackstreet-56a961cc3df78cf772a67375.jpg", "https://www.liveabout.com/thmb/U_b3CWTJlLoUWdPR6vSlH1DSYFY=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/4-non-blondes-whats-up-56a968855f9b58b7d0fb2f79.jpg", "https://www.liveabout.com/thmb/PnvKe9NmMvnzNKmNWXiVqz1TByQ=/800x0/filters:no_upscale():max_bytes(150000):strip_icc()/madonna-vogue-56a968855f9b58b7d0fb2f75.jpg", "https://www.liveabout.com/thmb/kMm90GfpX_T-mR1CTJhMVdNREbQ=/700x0/filters:no_upscale():max_bytes(150000):strip_icc()/mariah-carey-fantasy-56a968853df78cf772a6b98e.jpg", "https://www.liveabout.com/thmb/h0yBHCsIFH2DxhXBSlsSpABrXJo=/250x0/filters:no_upscale():max_bytes(150000):strip_icc()/believe-56a95fd15f9b58b7d0fad62a.JPG"

    ];

    const maxGuess = 10;
    var pauseGame = false;

    var guessLetter = [];
    var guessingWord = [];
    var wordToMatch;
    var randomWord;
    // var picToMatch;
    var numGuess;
    var wins = 0;
    var losses = 0;

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
        var goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
        var badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3");
        var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
        var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");

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
                    // Replace the image
                    // $('#image>img').replaceWith("<img src = 'possiblePictures[possibleWords.indexOf(randomWord)]' >");
                    // Play the song of the found word
                    var image1 = document.getElementById("image1");
                    image1.src = possiblePictures[possibleWords.indexOf(randomWord)];
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
        randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        wordToMatch = randomWord.toUpperCase();
        console.log(wordToMatch);
        console.log(possibleWords.indexOf(randomWord));
        console.log(possiblePictures[possibleWords.indexOf(randomWord)]);
        // for (var k = 0, l = possibleWords.length, n = possiblePictures.length; k < l && k < n; k++) {
        //     if (possibleWords[k] === randomWord) {
        //         console.log(possiblePictures[k]);
        //     }

        // Printing -1 because prime number is not found. 
        // console.log([4, 6, 8, 12].findIndex(isPrime));

        // Printing 2 the index of prime number (7) found. 
        // console.log([4, 6, 7, 12].findIndex(isPrime));
        // }



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