"use strict";
;
var mySum;
mySum = function (number1, number2) { return number1 + number2; };
console.log({ mySum: mySum(1, 2) });
var myCalculator;
myCalculator = {
    add: function (number1, number2) { return number1 + number2; },
    subtract: function (number1, number2) { return number1 - number2; },
    multiply: function (number1, number2) { return number1 * number2; },
    divide: function (number1, number2) { return number1 / number2; },
};
console.log({
    add: myCalculator.add(1, 2),
    subtract: myCalculator.subtract(1, 2),
    multiply: myCalculator.multiply(1, 2),
    divide: myCalculator.divide(1, 2),
});
//# sourceMappingURL=functions.js.map