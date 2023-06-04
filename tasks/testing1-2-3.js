//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

const number = (arr) => arr.map((el, i) => `${i + 1}: ${el}`)

console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]