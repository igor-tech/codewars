//https://www.codewars.com/kata/5a0d38c9697598b67a000041/javascript
function eliminateUnsetBits(number) {
    return parseInt(number.replace(/0/g, '') || 0, 2)
}

console.log(eliminateUnsetBits("0")) // 255