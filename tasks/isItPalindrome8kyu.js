//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('hello')) // false