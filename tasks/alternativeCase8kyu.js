/**
 * Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
 */

String.prototype.toAlternatingCase = function () {
    return this.split('').map(el => el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase()).join('')
}

console.log("hello world".toAlternatingCase()) // "HELLO WORLD"