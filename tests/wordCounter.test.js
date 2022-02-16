// Word Frequency Counter
const countWords = require('../wordCounter');

// should return invalid if input is not array of words
// should log the object with count per word 

describe('Countwords function', () => {
    it('should return invalid if input is not array of words', () => {
        expect(countWords('string')).toBe('Invalid input, please enter array of words!');
    });
    it('should log the object with count per word', () => {
        const spy = jest.spyOn(console,"log");
        const result = countWords(['bts','BTS','Bangtan']);
        expect(spy).toHaveBeenCalledWith({ bts: 2, bangtan: 1 });
    });
});