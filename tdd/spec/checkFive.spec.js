 const test = require('../checkFive.js');
const assert = require('assert');

describe("checkFive", function(){

   it("returns 'num is less than 5' when num < 5.", function(){
      let output = test.checkFive(2);
      assert.strictEqual(output, '2 is less than 5.');
   });

   it("returns 'num is greater than 5' when num > 5.", function(){
      let output = test.checkFive(6);
      assert.strictEqual(output, '6 is greater than 5.');
   });

   it("returns 'num is equal to 5' when num = 5.", function(){
      let output = test.checkFive(5);
      assert.strictEqual(output, '5 is equal to 5.');
   });

});
