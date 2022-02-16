function repeat(operation, num) {
    if (num > Number.MAX_SAFE_INTEGER) return "Number is too large!";
    if (num <= 0 || typeof num != 'number') return "Invalid input!";
    else {
        // if(operation.arguments.length > 0) return 'Invalid function, enter no arguments!';
        if(typeof operation != 'function') return "Invalid, input a proper function!";
        operation();
        repeat(operation,--num);
    }
    return "Success!"
}
// repeat( () =>{
//     console.log('Hello');
// },4);
// funcCalled = (num) => {
//     console.log(num);
// }
// console.log(repeat(funcCalled(5),4));
module.exports = repeat;