

describe('temp converter tests', () => {
    test('32 and F will give back 0', () => {
        const expected = 0;
        const actual = require('./temp-converter').convertTemp(32, 'F');
        expect(actual).toEqual(expected);
    })
})