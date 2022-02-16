module.exports = doubleAll = (array) => {
  if(array.constructor === Array) return 'Invalid input, please enter an array!';
  if(array.length > 20) return 'Array size should be under 20!';
  if(array.some((num) => { num > 9 || num < 0})) return 'Invalid array values, please enter numbers from 0-9!';
  return array.map((num) => {
        return num * 2;
  });
};
console.log(doubleAll([10,12]));