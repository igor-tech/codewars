//https://www.codewars.com/kata/56b97b776ffcea598a0006f2/javascript
function bubbleSortOnce(a) {
    let newArr = [...a]

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > newArr[i + 1]) {
            [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]]
        }
    }
    return newArr
}

console.log(bubbleSortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])) // [7, 5, 3, 1, 2, 4, 6, 8, 9]