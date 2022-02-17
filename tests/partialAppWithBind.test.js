// Partial Application With Bind
const logger = require('../partialAppWithBind');

// should return invalid message if namespace is not string
// should log namespace before passed message if inputs are valid
describe('Logger Function', () => {
    it('should log namespace before passed message if inputs are right', () => {
        const   spy = jest.spyOn(console,"log");
        const   warn = logger("WARNING: ");
                warn("Watch out!", "On your left!");
                expect(spy).toHaveBeenCalledWith("WARNING: ","Watch out!", "On your left!");
    });
    it('should return invalid message if namespace is not string', () => {
        const   spy = jest.spyOn(console,"log");
        const   warn = logger(5);
                warn("anything");
                expect(spy).toHaveBeenCalledWith("Invalid namespace, enter a string please!");
    });
});