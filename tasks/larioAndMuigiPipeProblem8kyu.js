//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
function pipeFix(numbers) {
    let res = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        res.push(i)
    }
    return res
}

console.log(pipeFix([-1,4])) //[-1,0,1,2,3,4]