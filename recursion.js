const reduce = (arr, fn, initial) => {
    return 
}
function reduce(arr, fn, initial) {
    return (func)(0, initial) 
}
func = (index, value) => {
    if (index > arr.length - 1) return value
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) 
}