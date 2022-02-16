module.exports  = function upperCaser(input) {
    if(typeof input != 'string') return 'Invalid, please enter a string!';
    return input.toUpperCase();
}
