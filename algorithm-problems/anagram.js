// Вспомогательная функция для создания объекта
// хранящего пары вида <символ>:<кол-во повторений>
const buildCharObject = (str) => {
    const charObj = {}

    for (let char of str.replace(/[^\w]/g).toLowerCase()) {
        // Поисходит первичная запись свойства в объект,
        // либо инкрементирование, если оно уже имеется
        charObj[char] = charObj[char] + 1 || 1
    }

    return charObj
}

// Основная функция
const anagram = (strA, strB) => {
    const aCharObject = buildCharObject(strA)
    const bCharObject = buildCharObject(strB)

    // Если в объектах разное кол-во символов, это не анаграмма
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        return false
    }

    // Так же возвращаем false, если кол-во вхождений
    // не совпадает для какого-либо символа
    for(let char in aCharObject) {
        if(aCharObject[char] !== bCharObject[char]) {
            return false
        }
    }

    return true
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false