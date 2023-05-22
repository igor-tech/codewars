function multiply(number){
    return number * 5 ** String(Math.abs(number)).length
}

console.log(multiply(-421263)) // -6582234375
