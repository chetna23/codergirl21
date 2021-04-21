// code sample in the RPS.js file:
function whoWon(player1,player2){
    if (player1 === player2){
        return 'TIE!';
    }

    if (player1 === 'rock' && player2 === 'paper'){
        return 'Player 2 wins!';
    }

    if (player1 === 'paper' && player2 === 'scissors'){
        return 'Player 2 wins!';
    }

    if (player1 === 'scissors' && player2 === 'rock'){  //Intentional typo fixed: 'rock ' to 'rock'
        return 'Player 2 wins!';
    }

    return 'Player 1 wins!';
}

// The students need to add this export code to the RPS.js file:
module.exports = {
    whoWon: whoWon
};