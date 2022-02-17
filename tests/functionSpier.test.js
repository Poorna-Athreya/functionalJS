// Function spier 
const spy = require('../functionSpier');

// should return invalid message if target passed is not object
// should return invalid message if the object does not contain the method given
// should return count of the number of times the method is called
describe('Spy function', () => {
    it("should return invalid message if target passed is not object", () => {
        expect(spy('helo',spiedOnFn)).toBe("Invalid, please pass an object!");
    });
    it("should return invalid message if the object does not contain the method given", () => {
        expect(spy(console,'helo')).toBe("Invalid, the object does not have that method!");
    });
    it('should return count of the number of times the method is called', () => {
        expect(spy(console,'log')).toBe(3);
    });
});