const assert = require('assert');
const hello = require('../hello');
describe('hello', function() {
    it('should return message', function() {
        let result = hello('1410');
        assert.strictEqual(typeof result, 'object');
        assert.strictEqual(result.name, '1410');
    });
})