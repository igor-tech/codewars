/**
 * Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
 */

const find = (arr, el) => arr.indexOf(el) >= 0 ? arr.indexOf(el) : "Not found"

const array = [2,3,5,7,11];
console.log(find(array, 3))// 1