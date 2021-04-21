// Unit Testing Exercises #3



// One new it statement is needed of P1 & P2 are validated together.
// For the separate validation used above, two it statements are needed.
const test = require('../RPSBonus.js');
const assert = require('assert');

describe("whoWon", function(){

   it("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
      let output = test.whoWon('rock','paper');
      assert.strictEqual(output, "Player 2 wins!");
   });

   it("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
      let output = test.whoWon('paper','scissors');
      assert.strictEqual(output, "Player 2 wins!");
   });

   it("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
      let output = test.whoWon('scissors','rock');
      assert.strictEqual(output, "Player 2 wins!");
   });

   it("returns 'TIE!' if P1 & P2 choose the same option.", function(){
      let outputs = [];
      outputs.push(test.whoWon('rock','rock'));
      outputs.push(test.whoWon('paper','paper'));
      outputs.push(test.whoWon('scissors','scissors'));
      for (let i = 0; i < outputs.length; i++) {
         assert.strictEqual(outputs[i], "TIE!");
      }      
   });

   it("returns 'Player 1 wins!' if the P2 win checks and TIE check all return false.", function(){
      let outputs = [];
      outputs.push(test.whoWon('rock','scissors'));
      outputs.push(test.whoWon('paper','rock'));
      outputs.push(test.whoWon('scissors','paper'));
      for (let i = 0; i < outputs.length; i++) {
         assert.strictEqual(outputs[i], "Player 1 wins!");
      }
   });

   it("returns 'Invalid entry, player 1.' if P1 does NOT enter 'rock', 'paper', or 'scissors'", function(){
      let output = test.whoWon('invalid','rock');
      assert.strictEqual(output, "Invalid entry, player 1.");
   });

   it("returns 'Invalid entry, player 2.' if P2 does NOT enter 'rock', 'paper', or 'scissors'", function(){
      let output = test.whoWon('rock','invalid');
      assert.strictEqual(output, "Invalid entry, player 2.");
   });

});
