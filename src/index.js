'use strict';

function countFactorial(num = 1) {
  if (typeof num !== 'number' || Number.isNaN(num) || num < 0) return 'Error!';
  if (num === 0 || num === 1) return 1;
  return num * countFactorial(num - 1);
}

console.log(countFactorial(5));
