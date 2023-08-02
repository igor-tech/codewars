// Напишите функцию, которая принимает строку и возвращает новую строку, в которой каждое слово начинается с большой буквы.
const text = 'hi our friend, you will be a developer soon'

const upperCase = (str) => {
    const arrStr = str.split(' ')
    return arrStr.map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}
console.log(upperCase(text))