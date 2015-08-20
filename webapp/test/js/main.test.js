/**
 * Created by Nick on 20.08.2015.
 */

'use strict';

var assert = chai.assert;

describe('getResult(x,y)', function () {
    it('should do stuff', function () {
        assert.equal(37, getResult(12, 25));
        assert.notEqual(40, getResult(12, 25));
        assert.isNaN(getResult());
    });
});


describe('getHelloWorld()', function () {
    it("should return hello world!", function () {
        assert.equal("hello world!", getHelloWorld());
        assert.notEqual("hello welt!", getHelloWorld());
    });
});

/**
 describe('fail()', function () {
    it("should fail", function () {
        assert.isFalse(true);
    });
 });
 */