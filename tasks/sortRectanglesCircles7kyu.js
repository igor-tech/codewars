//https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/javascript
function sortByArea(array) {
    return array.sort((a, b) => (Array.isArray(a) ? a[0] * a[1] : Math.PI * a ** 2) - (Array.isArray(b) ? b[0] * b[1] : Math.PI * b ** 2))
}

console.log( sortByArea([ 1.83, [ 0.74, 8.04 ], 2.33, [ 3.92, 4.2 ], 0.87, 8.15 ])) //  [ 0.87, [ 0.74, 8.04 ], 1.83, [ 3.92, 4.2 ], 2.33, 8.15 ]
