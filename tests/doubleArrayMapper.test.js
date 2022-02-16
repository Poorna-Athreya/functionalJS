// Array mapper function
const doubleAll = require('../doubleArrayMapper');

// Should return an array of values double the original
// Should return invalid message if input numbers are not between 0-9
// Should return invalid message if input is not an array 
// Should return invalid message if input isan array of length > 20
describe('Doubling array map function', () => {
    it('Should return an array of values double the original', () => {
        expect(doubleAll([1,2,3,4,5])).toStrictEqual([2,4,6,8,10]);
    });
    it('Should return invalid message if input numbers are not between 0-9', () => {
        expect(doubleAll([10,12])).toBe('Invalid array values, please enter numbers from 0-9!');
    });
    it('Should return invalid message if input isan array of length > 20', () => {
        expect(doubleAll([0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,0,7,8,7,6,8])).toBe('Array size should be under 20!');
    });
    it('Should return invalid message if input is not an array', () => {
        expect(doubleAll('Hello')).toBe('Invalid input, please enter an array!');
    });
});
