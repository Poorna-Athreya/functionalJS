// Implementing map() with reduce()
const arrayMap = require('../mapWithReduce');

// should return invalid message if input is not an array
// should return mapped array if inputs are valid
describe('arrayMap function', () =>{
    const array = [1,2,3,4,5];
    const mapFunction = (num) => num = num * 2 ;
    it('should return mapped array if inputs are valid', () =>{
        const   map = arrayMap(array,mapFunction);
                expect(map).toStrictEqual([2,4,6,8,10]);
    });
    it('should return invalid message if input is not an array', () =>{
        const   map = arrayMap('hello', mapFunction);
                expect(map).toBe("Invalid input, please enter an array!");
    });
});