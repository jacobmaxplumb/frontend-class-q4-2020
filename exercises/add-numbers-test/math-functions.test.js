const mathFunctions = require('./math-functions');

describe('math function tests', () => {
    test('when addNumbers takes in 3 and 4 it will return 7', () => {
        const expected = 7;
        const actual = mathFunctions.addTwoNumbers(3, 4);
        expect(actual).toEqual(expected);
    })
})