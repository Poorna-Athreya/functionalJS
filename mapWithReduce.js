arrayMap = (arr, fn) => {
    if(arr.constructor !== Array) return "Invalid input, please enter an array!";
    return arr.reduce((returnArr, num) => {
        returnArr.push(fn(num));
        return returnArr;
    },[]);
}
module.exports =  arrayMap;
// const   mapper = arrayMap(1,doubleAll = (num) => num = num*2);
//         console.log(mapper);