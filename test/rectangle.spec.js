// Import chai.
let chai = require('chai');
let path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
let Rectangle = require(path.join(__dirname, '..', 'rectangle'));

describe('Rectangle', function () {

    describe('#constructor()', function () {
        it('requires two numerical arguments', function () {
            (function () {
                new Rectangle();
            }).should.throw(Error);

            (function () {
                new Rectangle(1.0);
            }).should.throw(Error);

            (function () {
                new Rectangle('foo', 'bar');
            }).should.throw(Error);

            (function () {
                new Rectangle(5, 7);
            }).should.not.throw(Error);
        });
    });

    describe('#width', function () {
        let rectangle;

        beforeEach(function () {
            // Create a new Rectangle object before every test.
            rectangle = new Rectangle(10, 20);
        });

        it('returns the width', function () {
            // This will fail if "rectangle.width" does
            // not equal 10.
            rectangle.width.should.equal(10);
        });

        it('can be changed', function () {
            // Assert that the width can be changed.
            rectangle.width = 30;
            rectangle.width.should.equal(30);
        });

        it('only accepts numerical values', function () {
            // Assert that an error will be thrown if
            // the width it set to a non-numerical value.
            (function () {
                rectangle.width = 'foo';
            }).should.throw(Error);
        });
    });

    describe('#height', function () {
        let rectangle;

        beforeEach(function () {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the height', function () {
            rectangle.height.should.equal(20);
        });

        it('can be changed', function () {
            rectangle.height = 30;
            rectangle.height.should.equal(30);
        });

        it('only accepts numerical values', function () {
            (function () {
                rectangle.height = 'foo';
            }).should.throw(Error);
        });
    });

    describe('#area', function () {
        let rectangle;

        beforeEach(function () {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the area', function () {
            rectangle.area.should.equal(200);
        });

        it('can not be changed', function () {
            rectangle.area = 1000;
            rectangle.area.should.equal(200);
        });
    });

    describe('#circumference', function () {
        let rectangle;

        beforeEach(function () {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the circumference', function () {
            rectangle.circumference.should.equal(60);
        });

        it('can not be changed', function () {
            rectangle.area = 1000;
            rectangle.area.should.equal(200);
        });
    });
});