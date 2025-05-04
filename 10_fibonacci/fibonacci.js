const fibonacci = function(num) {
    let previousnum = 1
    let number = 2
    let fibonacciNum = 0
    num = parseInt(num)
    if (num < 0) {return 'OOPS'}
    if (num == 0) {return 0}
    if (num == 1) {return 1}
    if (num == 2) {return 1}
    else {
        for (let i = 2; i <= num-2; i++) {
            fibonacciNum = number + previousnum
            previousnum = number
            number = fibonacciNum
        }
    }
    return fibonacciNum
};

console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
