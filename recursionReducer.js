const reduce = (arr, functionCalled, initialValue) => {
    if(arr.constructor !== Array) return "Invalid input, please enter array!";
    return (insideReduceFn = (index, element) => {
        if(index > arr.length -1) return element;
        return insideReduceFn(index + 1, functionCalled(element, arr[index], index, arr));
    })(0,initialValue);
}
module.exports = reduce;

// console.log(reduce([1,2,3], sum = (prev,curr,index,arr) => {
//     return prev+curr;
// },0));
