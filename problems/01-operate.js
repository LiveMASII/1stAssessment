/*
Build a function that takes in three arguments: num1, num2,
and a string operation. Each number will be an integer and the operation will
be "greater than", "less than", "equal to" or "not equal to". Your function will
perform the operation between the two numbers and return the answer.

If the operation is invalid, return the string "Invalid Operation".
*/

function operate(num1, num2, operation) {
  let str = operation

  if (str == 'greater than'){
    return num1 > num2
    } else if (str == 'less than'){
      return num1 < num2
    } else if (str == 'equal to'){
      return num1 === num2
    } else if (str == 'not equal to'){
      return num1 !== num2
    } else if (str == 'opposite to'){
      return 'Invalid Operation'
    }
    
    
  }
    



console.log(operate(456, 123, 'greater than')); // true
console.log(operate(654, 654, 'less than'));    // false
console.log(operate( 99,   3, 'equal to'));     // false
console.log(operate(111,   3, 'not equal to')); // true
console.log(operate( 42,  42, 'opposite to'));  // "Invalid Operation"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = operate;
