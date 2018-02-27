module.exports = function getZerosCount(number) {
let a = 0;
    while (number>0) {
    number = Math.floor(number / 5);
    a += number;
  } 
  return a;}
