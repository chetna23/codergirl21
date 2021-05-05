const launchOutput = require('../launchCodeRocks1.js');
const assert = require('assert');

describe('stuido tests', function(){
    it('test number only divisible by 2 returns Launch', function() {
        assert.strictEqual(launchOutput(4), 'Launch!');
    });
    it('test number only divisible by 3 returns Code', function() {
        assert.strictEqual(launchOutput(3), 'Code!');
    });
    it('test number only divisible by 5 returns Rocks!', function() {
        assert.strictEqual(launchOutput(5), 'Rocks!');
    });
    it('test number divisible by 2 and 3 returns LaunchCode!', function() {
        assert.strictEqual(launchOutput(6), 'LaunchCode!');
    });
    it('test number divisible by 3 and 5 returns Code Rocks!', function() {
        assert.strictEqual(launchOutput(15), 'Code Rocks!');
    });
    it('test number divisible by 2 and 5 returns Launch Rocks!', function() {
        assert.strictEqual(launchOutput(10), 'Launch Rocks!');
    });
    it('test number divisible by 2, 3 and 5 returns LaunchCode Rocks!', function() {
        assert.strictEqual(launchOutput(30), 'LaunchCode Rocks!');
    });
    it('test number not divisible by 2, 3 or 5 returns Rutabagas! That doesn\'t work.', function() {
        assert.strictEqual(launchOutput(7), 'Rutabagas! That doesn\'t work.');
    });

})