// Get Short messages
const {getShortMessages,arrayOfObjects} = require('../shortMessagefilter');

// should return the messages in an array if length <50 chars
// should return "None found!" if no messages < 50 chars
// should return invalid message if input passed is not an array of objects
describe('ShortMessages function', () => {
    it('should return the messages in an array if length <50 chars', () => {
        const arrayOfObjects = [
            {
                message: "jhgdfghgfdgyfdgyfytrertyuioyutrewrtyuiouytrewrtyuiytrewrtuiytrewrtuytrewrty",
                name:'hhshs'
            },
            {
                message:"Why do I need a uterus",
                name: "hhh"
            },
            {
                message: "someone take it away"
            },
            {
                message:'why do women have periods its frustrating someone save me from this hell'
            }
        ]
        expect(getShortMessages(arrayOfObjects)).toStrictEqual([ 'Why do I need a uterus', 'someone take it away' ]);
    });
    it('should return "None found!" if no messages < 50 chars', () => {
        const   arrayOfObjects = [{message:"retyuiouytrewrtyuiouytrewrtyuiytrewtyutretyuuyutre567865678976rer7686567iuytr"}];
                expect(getShortMessages(arrayOfObjects)).toBe("No messages below 50 chars found!");
    });
    
});