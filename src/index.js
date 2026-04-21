'use strict';

function countFactorial(num = 1){
  if(typeof num !== 'number' || Number.isNaN(num)) return 'Error!'
  if (num === 1) return num;
  return num * countFactorial(num - 1)
}

console.log(countFactorial(10))