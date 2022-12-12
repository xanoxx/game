let p_score = 0, c_score = 0;

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
            p_score++;
        } else if (computerSel === 'rock') {
            res = 'You lost! Rock beats Scissors';
            c_score++;
        }
    } else if (playerSel.toLowerCase() === 'paper') {
        if (computerSel === 'rock') {
            res = 'You win! Paper beats Rock';
            p_score++;
        } else if (computerSel === 'scissors') {
            res = 'You lost! scissors beats paper';
            c_score++;
        }
    } else if (playerSel.toLowerCase() === 'rock') {
        if (computerSel === 'scissors') {
            res = 'You win! Rock beats Scissors';
            p_score++;
        } else if (computerSel === 'paper') {
            res = 'You lost! paper beats rock';
            c_score++;
        }
    }
    return res;
}

function game() {
    /*for (let i = 0; i < 5; i++) {
        const playerSel = prompt('Insert your choice: ');
        const computerSel = getComputerChoice();
        const res = playRound(playerSel, computerSel);
        console.log(res);
    }*/

    const div = document.createElement('div');

    let res = '';
    const text = document.createElement('p');

    const score = document.createElement('h3');
    const winner = document.createElement('h2');

    const btns = document.querySelectorAll('button');
    btns.forEach(btn => btn.addEventListener('click', (e) => {
        res = playRound(btn.id, getComputerChoice());
        text.textContent = res;
        score.textContent = `${p_score} | ${c_score}`;

        if (p_score === 5) {
            winner.textContent = 'WINNER';
            p_score = 0;
            c_score = 0;
            setTimeout(() => winner.textContent = '',1000);
        } else if (c_score === 5) {
            winner.textContent = 'LOSER';
            p_score = 0;
            c_score = 0;
            setTimeout(() => winner.textContent = '',1000);
        }
    }));

    if(winner.textContent === 'WINNER' || winner.textContent === 'LOSER') {
        p_score = c_score = 0;
    }

    div.appendChild(text);
    div.appendChild(score);
    div.appendChild(winner);
    document.body.appendChild(div);
}
game();

