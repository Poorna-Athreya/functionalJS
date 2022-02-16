function countWords(inputWords) {
    if(!inputWords || inputWords.constructor !== Array) return "Invalid input, please enter array of words!";
    if(!inputWords.every((word)=> word.constructor === String)) return 'Invalid input, please enter array of words!';
    inputWords = inputWords.map((word) => word.toLowerCase());
    const wordFrequency = inputWords.reduce( (wordCount,word) => {
        wordCount[word] = ++wordCount[word] || 1;
        return wordCount;
    },{});
    console.log(wordFrequency);
}
module.exports = countWords
countWords(['bts','BTS','helo']);