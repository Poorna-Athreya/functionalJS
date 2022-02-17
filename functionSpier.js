function spy(target, method) {
    if(target.constructor !== Object) return "Invalid, please pass an object!";
    if(!Object.hasOwn(target,method)) return "Invalid, the object does not have that method!";
    let     count = 0;
    const   copyMethod = target[method];
            target[method] = (...args) => {
                count++;
                return copyMethod.apply(this, args);
            }   
    return count;          
}
module.exports = spy
const person = {
    run: () =>{
        console.log("Running!");
    }
};
person.run();
person.run(); 
console.log(spy(person,'run'));