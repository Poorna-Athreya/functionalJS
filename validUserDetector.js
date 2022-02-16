function checkUsersValid(goodUsers) {
    if(goodUsers.constructor !== Array) return 'Invalid input!';
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every( (user) => {
            return goodUsers.some( (goodUser) => {
                return user.id === goodUser.id;
            });
        });
    };
}
module.exports = checkUsersValid