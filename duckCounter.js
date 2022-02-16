const duckCount = (...args) => {
    if(args.every((eachArg) => { eachArg.constructor === Object; })) return 'Invalid input, please enter array of objects!';
    return Array.prototype.slice.call(args).filter((object) => {
        return Object.prototype.hasOwnProperty.call(object, 'quack');
    }).length;
}
module.exports = duckCount;
