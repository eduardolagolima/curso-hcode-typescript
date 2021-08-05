interface ISum {
    (number1: number, number2: number): number;
};

let mySum: ISum;

mySum = (number1, number2) => number1 + number2;

console.log({ mySum: mySum(1, 2) });

interface ICalculator {
    add(number1: number, number2: number): number;
    subtract(number1: number, number2: number): number;
    multiply(number1: number, number2: number): number;
    divide(number1: number, number2: number): number;
}

let myCalculator: ICalculator;

myCalculator = {
    add: (number1, number2) => number1 + number2,
    subtract: (number1, number2) => number1 - number2,
    multiply: (number1, number2) => number1 * number2,
    divide: (number1, number2) => number1 / number2,
}

console.log({
    add: myCalculator.add(1, 2),
    subtract: myCalculator.subtract(1, 2),
    multiply: myCalculator.multiply(1, 2),
    divide: myCalculator.divide(1, 2),
});
