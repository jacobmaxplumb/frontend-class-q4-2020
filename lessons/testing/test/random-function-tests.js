describe('random functions test', function() {
    it('when getHello is called it returns the string hello', function() {
        const expected = 'hello';
        const actual = getHello();
        expect(actual).toEqual(expected);
    })
})