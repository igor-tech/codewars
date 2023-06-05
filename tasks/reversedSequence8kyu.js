//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = n => {
    let res = []
    for (let i = n; i > 0; i--) {
        res.push(i)
    }
    return res
};

console.log(reverseSeq(5)) //[5, 4, 3, 2, 1]