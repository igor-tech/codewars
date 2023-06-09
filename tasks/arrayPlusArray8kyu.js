//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, num) => acc + num)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) // -21