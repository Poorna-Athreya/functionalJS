module.exports = logger = (namespace) => {
    if(typeof namespace !== 'string') return () => { console.log("Invalid namespace, enter a string please!");};
    return console.log.bind(console,namespace);
};

// const warn = logger("WARN: ");
// warn("Watch out!", "On your left!");
// console.log(warn);