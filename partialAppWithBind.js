module.exports = logger = (namespace) => {
    console.log.bind(console,namespace)
};

    