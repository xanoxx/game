function getComputerChoice() {
    let res;
    let num = Math.floor(Math.random()*3); //0, 1, 2
    if (num === 0) {
        res = 'scissors';
    } else if (num === 1) {
        res = 'paper';
    } else {
        res = 'rock';
    }
    return res;
}

function playRound(playerSel, computerSel) {
    let res = "No winner";
    if (playerSel.toLowerCase() === 'scissors') {
        if (computerSel === 'paper') {
            res = 'You win! Scissors beat Paper';
        } else if (computerSel === 'rock') {
            res = 'You lost! Rock beats Scissors';
        }
    } else if (playerSel.toLowerCase() === 'paper') {
        if (computerSel === 'rock') {
            res = 'You win! Paper beats Rock';
        } else if (computerSel === 'scissors') {
            res = 'You lost! scissors beats paper';
        }
    } else if (playerSel.toLowerCase() === 'rock') {
        if (computerSel === 'scissors') {
            res = 'You win! Rock beats Scissors';
        } else if (computerSel === 'paper') {
            res = 'You lost! paper beats rock';
        }
    }
    return res;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSel = prompt('Insert your choice: ');
        const computerSel = getComputerChoice();
        const res = playRound(playerSel, computerSel);
        console.log(res);
    }
}

game();
