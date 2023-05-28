function maxProduct(a) {
    let biggest = Math.max(...a);
    a.splice(a.indexOf(biggest), 1);
    return biggest * Math.max(...a);
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252])) //  218842