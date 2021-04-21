// Unit Testing Exercises #2

// Part 2 asks the students to construct a spec.js file on their own for the following

// Students must complete the following 5 tests.
// The completed spec.js code is:
const test = require('../RPS.js');
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
      let output = test.whoWon('tie','tie');
      assert.strictEqual(output, "TIE!");
   });

   it("returns 'Player 1 wins!' if the P2 win checks and TIE check all return false.", function(){
      let output = test.whoWon('win','lose');
      assert.strictEqual(output, "Player 1 wins!");
   });

});
