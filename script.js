
//Rock beats scissors and loses to paper.
//Scissors beat paper but loses to rock.
//Paper beats rock, but loses to scissors.
//Determine the winner. Either user or computer.
//There will be 5 rounds.
//keep score for the 5 rounds. 


//CREATING A RANDOM VALUE FOR EACH ITEM//
function getComputerChoice() {

    let randomGenerator = Math.random()

    if (randomGenerator <= 1 / 3 && randomGenerator >= 0) {
        return 'rock';
    } else if (randomGenerator < 2 / 3 && randomGenerator >= 1 / 3) {
        return 'paper';
    } else if (randomGenerator < 3 / 3 && randomGenerator >= 2 / 3) {
        return 'scissors';
    }
}

//PLAYING a single ROUND of rock, paper, scissors and selecting who wins or lose//

function game() {
    // ADDING BUTTONS TO PLAYER SECTION //
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    //   Selecting a div to keep the results
    const resultDiv = document.querySelector('#result');

    //   Selecting another div to show the scores
    const scoreDiv = document.querySelector('#scores');

    // Who won?
    const winner = document.querySelector('#win');

    // Setting Default values for the points
    let userPoint = 0;
    let computerPoint = 0;
    let playerSection = '';

    // Calling button's function
    rock(rockButton);
    paper(paperButton);
    scissors(scissorsButton);

        console.log(a), false

    var buton = document.getElementsByClassName('buton');
    buton.addEventListener('buton', (a) => {
        console.log(a)}, false);
    console.log(buton[0])

    /////BUTTON FUNCTIONS////

    function rock(rockButton) {
        rockButton.addEventListener('click', () => {
            playerSection = 'rock';
            result();
        });
    }
    function paper(paperButton) {
        paperButton.addEventListener('click', () => {
            playerSection = 'paper';
            result();
        });
    }

    function scissors(scissorsButton) {
        scissorsButton.addEventListener('click', () => {
            playerSection = 'scissors';
            result();
        });
    }


    function result() {
        let result = singleRound(playerSection, getComputerChoice()); //Result's declaration
        if (userPoint === 5 || computerPoint === 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            if (userPoint > computerPoint) {
                winner.textContent = `Congratulations, YOU WON!`;
            } else if (computerPoint > userPoint) {
                winner.textContent = `Oh unlucky :( Wishing you better luck next time`;
            }
        }
        resultDiv.textContent = result;
        scoreDiv.textContent = `Your point: ${userPoint}  computer point: ${computerPoint}`;
    }

    function singleRound(playerSection, computerSection) {
    if (playerSection === 'rock') {
        if (computerSection === 'scissors') {
            userPoint += 1;
            return `You win! ${playerSection} beats ${computerSection}`;
        } else if (computerSection === 'rock') {
            return `You picked ${playerSection} and computer picked ${computerSection}. It\'s a TIE!`;
        } else {
            computerPoint++;
            return `You lose! ${computerSection} beats ${playerSection}`;
        }
    }
    else if (playerSection === 'scissors') {
        if (computerSection === 'scissors') {
            return `You picked ${playerSection} and computer picked ${computerSection}. It\'s a TIE!`;
        } else if (computerSection === 'paper') {
            userPoint += 1;
            return `You win! ${playerSection} beats ${computerSection}`;
        } else {
            computerPoint++;
            return `You lose! ${computerSection} beats ${playerSection}`;
        }
    }
    else if (playerSection === 'paper') {
        if (computerSection === 'paper') {
            return `You picked ${playerSection} and computer picked ${computerSection}. It\'s a TIE!`;
        } else if (computerSection === 'rock') {
            userPoint += 1;
            return `You win! ${playerSection} beats ${computerSection}`;
        } else {
            computerPoint++;
            return `You lose! ${computerSection} beats ${playerSection}`;
        }
    }

}

}

game();