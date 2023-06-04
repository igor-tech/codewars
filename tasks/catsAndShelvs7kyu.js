//https://www.codewars.com/kata/62c93765cef6f10030dfa92b/javascript
function solution(start, finish) {
    let lengthPath = finish - start
    let res = 0
    while (lengthPath > 0) {
        if (lengthPath >= 3) {
            lengthPath -= 3
            res++
            continue
        }
        if (lengthPath >= 1) {
            lengthPath--
            res++
        }
    }
    return res
}

console.log(solution(3, 10)) // 3