// This is the modified code for the bonus mission. It validates user input.
function whoWon(player1,player2){
    let validEntries = ['rock', 'paper', 'scissors'];

    // The validation could check player1 and player2 together rather than separately. 
    if (!validEntries.includes(player1)) {
        return "Invalid entry, player 1.";
    } else if (!validEntries.includes(player2)) {
        return "Invalid entry, player 2.";
    }

    if (player1 === player2){
        return 'TIE!';
    }

    if (player1 === 'rock' && player2 === 'paper'){
        return 'Player 2 wins!';
    }

    if (player1 === 'paper' && player2 === 'scissors'){
        return 'Player 2 wins!';
    }

    if (player1 === 'scissors' && player2 === 'rock'){ //Intentional typo fixed: 'rock ' to 'rock'
        return 'Player 2 wins!';
    }

    return 'Player 1 wins!';
}

module.exports = {
    whoWon: whoWon
};