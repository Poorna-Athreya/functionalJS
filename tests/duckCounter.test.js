// Duck Counter 
const duckCount = require('../duckCounter');

// should return 0 if input is not 1+ objects
// should return the number of objects with a property 'quack' if valid input
describe('DuckCounter function', () => {
    it('should return 0 if input is not 1+ objects', () => {
        expect(duckCount("string")).toBe(0);
    });
    it("should return the number of objects with a property 'quack' if valid input", () => {
        const notDuck = Object.create({quack: true}), duck = {quack: true}, duck2 = {quack:true}; 
        expect(duckCount(duck,duck2,notDuck)).toBe(2);
    });
});