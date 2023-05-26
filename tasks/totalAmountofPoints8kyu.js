// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript


function points(games) {
    return games.reduce((acc, cur) => {
        return acc += cur[0] > cur[2] ? 3 : cur[0] === cur[2] ? 1 : 0
    }, 0)
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30