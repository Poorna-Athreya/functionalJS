module.exports = doubleAll = (array) => {
  if(!Array.isArray(array)) return 'Invalid input, please enter an array!';
  if(array.length > 20) return 'Array size should be under 20!';
  if(Math.min(...array)<0 || Math.max(...array)>9) return 'Invalid array values, please enter numbers from 0-9!';
  return array.map((num) => {
        return num * 2;
  });
};
console.log(doubleAll([10,12]));