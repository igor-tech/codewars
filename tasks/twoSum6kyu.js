function twoSum(numbers, target) {
    let seen = new Map()
    for (let i = 0; i < numbers.length; i++) {
        let x = numbers[i]
        let y = target - x
        if (seen.has(y)) return [seen.get(y), i]
        seen.set(x, i)
    }
}

console.log(twoSum([1, 2, 3], 4,)) // [0 , 2]