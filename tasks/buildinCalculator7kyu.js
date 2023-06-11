//https://www.codewars.com/kata/529f2d1c403a58f660000656/javascript
const Calculator = {
    add: (a, b) =>  a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b ===0 ? false : a / b

};
console.log(Calculator.divide(0, 22))
