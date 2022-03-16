function rockPaperScissorsLizardSpock(userInput) {

    /* Scissors cuts paper, paper covers rock, rock kills lizard,
    lizard poisons Spock, Spock smashes scissors,
    scissors decapitates lizard, lizard eats paper,
    paper disproves Spock, Spock pulverizes rock and, 
    as it always has, rock crushes scissors. */

    userInput = userInput.toString();
    if(userInput == 'spock') {userInput = 'Spock'}

    let random = Math.random()*10;
    var botInput;

    if(random < 2) {
        botInput = 'rock';
    } else if(random >= 2 && random < 4) {
        botInput = 'paper';
    } else if(random >= 4 && random < 6) {
        botInput = 'scissors';
    } else if(random >= 6 && random < 8) {
        botInput = 'lizard';
    } else if(random >= 8 && random <= 10) {    
        botInput = 'Spock';
    }

    function lose(myInput) {
        console.log(`I had ${myInput}. You win!`);
    }
    function win(myInput) {
        console.log(`I had ${myInput}. I win!`);
    }

    if(userInput === botInput) {
        console.log(`I had ${userInput} too. It's a draw!`);
    } else {
        if(userInput === 'rock') {
            if(botInput === 'scissors' || botInput === 'lizard') {
                lose(botInput);
            } else {
                win(botInput);
            }
        } else if(userInput === 'paper'){
            if(botInput === 'rock' || botInput === 'Spock') {
                lose(botInput);
            } else {
                win(botInput);
            }
        } else if(userInput === 'scissors'){
            if(botInput === 'paper' || botInput === 'lizard') {
                lose(botInput);
            } else {
                win(botInput);
            }
        } else if(userInput === 'lizard') {
            if(botInput === 'paper' || botInput === 'Spock') {
                lose(botInput);
            } else {
                win(botInput);
            }
        } else if(userInput === 'Spock') {
            if(botInput === 'rock' || botInput === 'scissors') {
                lose(botInput);
            } else {
                win(botInput);
            }
        } else {
            console.log("Invalid input!");
        }
    }
}
