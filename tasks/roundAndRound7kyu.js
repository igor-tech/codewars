//https://www.codewars.com/kata/591e8c715b1d254f9e00005e/javascript
function roundAndRound(n, a, b) {
    if (b === 0) return a

    while (b !== 0) {
        if (b > 0) {
            a = (a === n) ? 1 : a + 1
            b--
        } else {
            a = (a > 1) ? a - 1 : n
            b++
        }
    }
    return a

}

console.log(roundAndRound(6, 2, -5)) // 3
console.log(roundAndRound(5, 1, 3)) // 4
console.log(roundAndRound(3, 2, 7)) // 3