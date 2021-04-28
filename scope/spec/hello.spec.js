const assert = require('assert');
const hello = require('../hello');
describe('hello', function() {
    it('should return message', function() {
        let result = hello('1410::<932829840830053761>');
        assert.strictEqual(typeof result, 'object');
        assert.strictEqual(result, '1410');
    });
})