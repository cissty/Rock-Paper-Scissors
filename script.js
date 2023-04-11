
//Rock beats scissors and loses to paper.
//Scissors beat paper but loses to rock.
//Paper beats rock, but loses to scissors.
//Determine the winner. Either user or computer.
//There will be 5 rounds. 

function getComputerChoice(){

    let randomGenerator = Math.random()

    if (randomGenerator <= 1 / 3 && randomGenerator >= 0){
        return 'rock';
    }else if (randomGenerator < 2 / 3 && randomGenerator >= 1 / 3){
        return 'paper';
    }else if (randomGenerator < 3 / 3 && randomGenerator >= 2 / 3){
        return 'scissors';
    }
}

function singleRound(playerSection, computerSection){    
        if(playerSection === 'rock'){
        if (computerSection === 'scissors'){
            return `You win! ${playerSection} beats ${computerSection}`;
        }else if(computerSection === 'rock'){
            return `You picked ${playerSection} and computer picked ${computerSection}. It\'s a TIE!`;
        }else {
            return `You lose! ${computerSection} beats ${playerSection}`;
        }
    }
        else if(playerSection === 'scissors'){
        if (computerSection === 'scissors' ){
            return `You picked ${playerSection} and computer picked ${computerSection}. It\'s a TIE!`;
        }else if(computerSection === 'paper'){
            return `You win! ${playerSection} beats ${computerSection}`;
        }else {
            return `You lose! ${computerSection} beats ${playerSection}`;
        }
    }
        else if(playerSection === 'paper'){
        if (computerSection === 'paper' ){
            return `You picked ${playerSection} and computer picked ${computerSection}. It\'s a TIE!`;
        }else if(computerSection === 'rock'){
            return `You win! ${playerSection} beats ${computerSection}`;
        }else {
            return `You lose! ${computerSection} beats ${playerSection}`;
        }
    }
     
}


function game() {
    let userPoint = 0;
    let computerPoint = 0;

    for (let i = 0; i < 5; i++){
    const playerSection = prompt(`Enter your choice (rock, paper, or scissors)`);
    const computerSection = getComputerChoice();
    const roundResult = singleRound(playerSection, computerSection);
    
    if (roundResult.includes('You win!')){
        userPoint++;
    } else if (roundResult.includes('You lose!')){
        computerPoint++;
    }
    console.log(roundResult);
}    
    return `Your point: ${userPoint} and computer point: ${computerPoint}`;
}

console.log(game());