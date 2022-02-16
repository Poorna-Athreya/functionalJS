getShortMessages = (messageObjects) => {
    const messagesBelow50 =  messageObjects.filter((object) => {
        return object.message.length < 50
      }).map((object) => {
        return object.message
      });
      if(messagesBelow50.length == 0) return "No messages below 50 chars found!";
}
module.exports = {
    getShortMessages
}
// const arrayOfObjects = [
//     {
//         message: "jhgdfghgfdgyfdgyfytrertyuioyutrewrtyuiouytrewrtyuiytrewrtuiytrewrtuytrewrty",
//         name:'hhshs'
//     },
//     {
//         message:"Why do I need a uterus",
//         name: "hhh"
//     },
//     {
//         message: "someone take it away"
//     },
//     {
//         message:'why do women have periods its frustrating someone save me from this hell'
//     }
// ]
console.log(getShortMessages(arrayOfObjects));