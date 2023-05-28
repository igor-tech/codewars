//https://www.codewars.com/kata/56644a421b7c94c622000056/solutions/javascript

function mostLikely(prob1,prob2){
    let p1 =  prob1.split(':')
    let p2 =  prob2.split(':')
    return p1[0] / p1[1] > p2[0] / p2[1]
}

console.log(mostLikely('1:3','1:2')) // false
console.log(mostLikely('1:2','1:3')) // true
console.log(mostLikely('20:50','1:1000')) // true