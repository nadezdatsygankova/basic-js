const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let number = 0;
  for (let i = 0; i < matrix.length; i++) {
    let k = matrix[i];
    for (let j = 0; j < k.length; j++) {
      if (k[j] === '^^') {
        number++;
      }
    }
  }
  // if (matrix === undefined) {
  //   return false;
  // }
  return number;

};
