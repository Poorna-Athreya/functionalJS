// Recursion for Reducing
const reduce = require('../recursionReducer');


// should return invalid message if input is not array 
// should return reduced output if inputs are all valid
describe('Reduce (recursion) function', () => {
    sum = (prev,curr,index,arr) => {
        return prev+curr;
    }
    it('should return invalid message if input is not array', () => {
        expect(reduce(2,sum,0)).toBe("Invalid input, please enter array!");
    });
    it('should return reduced output if inputs are all valid', () => {
        expect(reduce([1,2,3,4],sum,5)).toBe(15);
    });
});