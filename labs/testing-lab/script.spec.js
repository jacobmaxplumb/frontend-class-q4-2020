const script = require('./script');

describe('pig latin tests', () => {
    test('converts the word to lowercase and does the pig latin stuff', () => {
        // arrange
        const word = 'Jacob';
        const expected = 'acobjay';

        //act
        const actual = script.translate(word);

        //assert
        expect(actual).toEqual(expected);
    })

    test('If a word starts with a vowel, just add “way” onto the ending', () => {
        // arrange
        const word = 'apple';
        const expected = 'appleway';

        // act
        const actual = script.translate(word);

        // assert
        expect(actual).toEqual(expected);
    })

    test('pig latin should take all consonants to the end of the word followed by ay', () => {
        // arrange
        const word = 'fries';
        const expected = 'iesfray';

        // act
        const actual = script.translate(word);

        // assert
        expect(actual).toEqual(expected);
    })
})