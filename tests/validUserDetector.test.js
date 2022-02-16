// ValidUser Detector
const checkUsersValid = require('../validUserDetector');

// should return invalid message when input parameter validUsers is not array of objects
// should return function to find good users if parameters are valid
describe('CheckUsersValid function', () => {
    const goodUsers = [{ id: 1 },{ id: 2 },{ id: 3 }];
    it('should return invalid message when input parameter validUsers is not array of objects', () => {
        expect(checkUsersValid('string')).toBe('Invalid input!');
    });
    it('should return function to find good users if parameters are valid', () => {
        const testAllValid = checkUsersValid(goodUsers);
        expect(testAllValid([{ id: 2 },{ id: 4 },{ id: 1 }])).toBe(false);
        expect(testAllValid([{ id: 2 },{ id: 1 }])).toBe(true);
    });
});