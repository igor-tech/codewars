//https://www.codewars.com/kata/542f3d5fd002f86efc00081a/train/javascript
function primeFactors(n) {
    let res = []
    for (let i = 2; i <= n; i++) {
        while(n % i === 0) {
            res.push(i)
            n/=i
        }
    }
    return res
}

console.log(primeFactors(12)) // [2, 2, 3]