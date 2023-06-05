//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = n => {
    return new Array(5).fill(n).map((el, i) => el - i)
};

console.log(reverseSeq(5)) //[5, 4, 3, 2, 1]