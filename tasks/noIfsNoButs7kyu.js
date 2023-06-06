// https://www.codewars.com/kata/592915cc1fad49252f000006/javascript
function noIfsNoButs(a, b) {
    switch (true) {
        case a === b:
            return `${a} is equal to ${b}`
        case a > b:
            return `${a} is greater than ${b}`
        case a < b:
            return `${a} is smaller than ${b}`
    }
}

console.log(noIfsNoButs(45, 51)) // "45 is smaller than 51"