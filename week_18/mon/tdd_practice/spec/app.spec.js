const app = require('../app');
const sinon = require('sinon');
require('jasmine-sinon');

describe('app', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    describe('sortArray()', () => {
        it('return a sorted array', () => {
            const result = app.sortArray([3,2,1]);
            expect(result).toEqual([1,2,3]);
        });
    });

    describe('methodToTest()', () => {
        it('returns the sum of three numbers', () => {
            const result = app.methodToTest(1,2,3);
            expect(restul).toEqual(6);
        });
    });

    describe('sinonSpy()', () => {
        it('uses spy to show external function was called', () => {
            const spy = sandbox.spy(Date, 'now');
            app.sinonSpy();
            expect(spy).toHaveBeenCalledOnce();
        });
    });

    afterEach(() => {
        sandbox.restore();
    });
});