'use strict';

function countFactorial(num = 1) {
  if (typeof num !== 'number' || Number.isNaN(num) || num < 0) return 'Error!';
  if (num === 0) return 1;
  if (num === 1) return num;
  return num * countFactorial(num - 1);
}

console.log(countFactorial(5));
