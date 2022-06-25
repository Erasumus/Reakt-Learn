"use strict";

///////////////////////////////////////////////////////////////
let x = 2;
let n = 5;

function countBy(x, n) {
    let z = [];
    for(let i = 1; i<=n;i++){
        z.push(i*x);
    }
    
    return z;
  }

console.log(countBy(x,n));
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
var humanYears = 10;

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  for(let i = 1; i <= humanYears; i++){
    if(i == 1){
      catYears += 15;
      dogYears += 15;
    }
    else if(i == 2){
      catYears += 9;
      dogYears += 9;
    }
    else{
      catYears += 4;  
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];

  // const humanYearsCatYearsDogYears = humanYears => [
  //   humanYears,
  //   ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  //   ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
  // ];

  //var humanYearsCatYearsDogYears = function(y) {
  //  if (y == 1) return [1, 15, 15]
  //  if (y == 2) return [2, 24, 24]
  //  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  //}

};
console.log(humanYearsCatYearsDogYears(humanYears));


///////////////////////////////////////////////////////////////
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  var sumNegative = 0;
  var countPositive = 0;
  if(input != null && input.length!=0){
    for(let i = 0; i < input.length; i++){
      if(input[i] < 0){
        sumNegative += input[i];
      }    
      else if(input[i] > 0){
        countPositive++;
      }
    }
    return [countPositive, sumNegative];
  }
  return [];
}

console.log(countPositivesSumNegatives(input));

// function countPositivesSumNegatives(input) {
//   return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

