/*
•Import the functions you created in the math.js into the app.js file using require 
•In the app.js file, include at least four examples using the math functions (ex. console.log)
*/

const sumFunc = require('./math');
console.log('The result is: ' + sumFunc.sum(33, 11))
console.log('The result is: ' + sumFunc.subtract(33, 11))
console.log('The result is: ' + sumFunc.multiply(33, 11))
console.log('The result is: ' + sumFunc.divide(33, 11))