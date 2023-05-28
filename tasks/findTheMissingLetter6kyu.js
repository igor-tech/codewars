//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.splice(alphabet.indexOf(array[0]), array.length + 1).find(el => !array.includes(el))
}


console.log(findMissingLetter(['b','c','d','f'])) // 'e'
console.log(findMissingLetter(['O','Q','R','S'])) // 'P'