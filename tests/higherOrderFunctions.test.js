// High Order Functions Challenge
const repeat = require('../higherOrderFunctions')
// Success:
// Should run the function n times if n (the input number) >0
// Should run the function n times if it has no parameters 
// Should run the function n times ifor return value
// Failure:
// Should throw message when input number <=0
// Should throw invalid message when input number is not numerical 
// Should throw invalid message when input number is too large
// Should throw invalid message if the function has a return type or parameters
// Should throw invalid message when input function is not a function
const funcCalled = () => {
    console.log("Function called");
} 
describe('Repeat operation function', () => {
    it('should run the function n times if n (the input number) >0 and function called has no return value/parameters', () => {
        // const spy = jest.spyOn(console, 'log');
        // expect(spy).toHaveBeenCalledwith('Hello\nHello');
        // spy.mockRestore();
        expect(repeat(funcCalled,3)).toBe('Success!');
    });
    // it('should run the function n times if it has no parameters or return value', () => {
    //     expect(repeat(funcCalled ,2)).toBe("Success!");
    // });
    it('should throw message when input number <=0', () => {
        expect(repeat(funcCalled,-2)).toBe("Invalid input!");
    });
    it('should throw invalid message when input number is not numerical', () => {
        expect(repeat(funcCalled,'hello')).toBe("Invalid input!");
    });
    it('should throw invalid message when input number is too large', () => {
        expect(repeat(funcCalled, 99999999999999999999999999999999999999999999999999999999999909876546789654678654356787654356776543567)).toBe("Number is too large!");
    });
    
    it('should throw invalid message when input function is not a function', () => {
        expect(repeat(5,1)).toBe("Invalid, input a proper function!");
    });
    // it('Should throw ivalid message if the function has a return type or parameters', () => {
    //     funcResult = (num) => {
    //         console.log(num);
    //     }
    //     const repeatResult = repeat(funcResult(5), 4);
    //     expect(repeatResult).toBe("Invalid function, enter no arguments!"); 
    // });
});
