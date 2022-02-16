// UpperCaser program
const upperCaser = require('../upperCaser')
// Should return invalid message if input is not string
// Should return uppercase value if input is string

describe('UpperCaser function', () => {
    it('Should return invalid message if input is not string', () => {
        expect(upperCaser(1234)).toBe('Invalid, please enter a string!');
    });
    it('Should return uppercase value if input is string', () => {
        expect(upperCaser('hello')).toBe('HELLO');
    });
});