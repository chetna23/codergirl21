const launchOutput = require('../launchCodeRocks');
const assert = require('assert');

describe('studio tests', function() {
    it('should return Launch! when passed a number that is divisible only by 2', function() {
        assert.strictEqual(launchOutput(4), 'Launch!');
    });

    it('should return Code! when passed a number that is divisible only by 3', function() {
        assert.strictEqual(launchOutput(9), 'Code!');
    });

    it('should return Rocks! when passed a number that is divisible only by 5', function() {
        assert.strictEqual(launchOutput(25), 'Rocks!');
    });

    it('should return LaunchCode! when passed a number that is divisible by 2 and 3', function() {
        assert.strictEqual(launchOutput(6), 'LaunchCode!');
    });

    it('should return Launch Rocks! when passed a number that is divisible by 2 and 5', function() {
        assert.strictEqual(launchOutput(10), 'Launch Rocks!');
    });

    it('should return Code Rocks! when passed a number that is divisible by 3 and 5', function() {
        assert.strictEqual(launchOutput(15), 'Code Rocks!');
    });

    it('should return Rutabagas! That doesn\'t work when passed a number that is not divisible by 2, 3 or 5', function() {
        assert.strictEqual(launchOutput(7), 'Rutabagas! That doesn\'t work.');
    });

})