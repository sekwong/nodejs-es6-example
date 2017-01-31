// Import chai.
let chai = require('chai');
let path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
let Rectangle = require(path.join(__dirname, '..', 'rectangle'));

// The fat arrow (=>) syntax is a new way to define
// functions in ES6. One feature that is different
// from the usual "function" keyword is that the scope
// is inherited from the parent, so there is no need to write
//
//   function() {
//     ...
//   }.bind(this)
//
// anymore. In this case we are not using "this" so the new
// syntax is just used for brevity.
describe('Rectangle', () => {

    describe('#constructor()', () => {
        it('requires two numerical arguments', () => {
            (() => {
                new Rectangle();
            }).should.throw(Error);

            (() => {
                new Rectangle(1.0);
            }).should.throw(Error);

            (() => {
                new Rectangle('foo', 'bar');
            }).should.throw(Error);

            (() => {
                new Rectangle(5, 7);
            }).should.not.throw(Error);
        });
    });

    describe('#width', () => {
        let rectangle;

        beforeEach(() => {
            // Create a new Rectangle object before every test.
            rectangle = new Rectangle(10, 20);
        });

        it('returns the width', () => {
            // This will fail if "rectangle.width" does
            // not equal 10.
            rectangle.width.should.equal(10);
        });

        it('can be changed', () => {
            // Assert that the width can be changed.
            rectangle.width = 30;
            rectangle.width.should.equal(30);
        });

        it('only accepts numerical values', () => {
            // Assert that an error will be thrown if
            // the width it set to a non-numerical value.
            (() => {
                rectangle.width = 'foo';
            }).should.throw(Error);
        });
    });

    describe('#height', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the height', () => {
            rectangle.height.should.equal(20);
        });

        it('can be changed', () => {
            rectangle.height = 30;
            rectangle.height.should.equal(30);
        });

        it('only accepts numerical values', () => {
            (() => {
                rectangle.height = 'foo';
            }).should.throw(Error);
        });
    });

    describe('#area', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the area', () => {
            rectangle.area.should.equal(200);
        });

        it('can not be changed', () => {
            (() => {
                rectangle.area = 1000;
            }).should.throw(Error);
        });
    });

    describe('#circumference', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the circumference', () => {
            rectangle.circumference.should.equal(60);
        });

        it('can not be changed', () => {
            (() => {
                rectangle.circumference = 1000;
            }).should.throw(Error);
        });
    });
});