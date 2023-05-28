//https://www.codewars.com/kata/514b92a657cdc65150000006/javascript

function solution(number){
    if (number < 0) return  0
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(solution(10)) // 3 5 6 9    23