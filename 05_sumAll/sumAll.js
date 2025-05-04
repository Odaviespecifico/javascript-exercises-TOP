const sumAll = function(start,finish) {
    let sum = 0
    if (start < 0 | finish < 0) {
        return "ERROR"
    }
    if (Math.round(start,1) !== start| Math.round(finish,1) !== finish) {
        return "ERROR"
    }
    if (finish < start) {
        let temp = start
        start = finish
        finish = temp
    }
    for (let i = start; i <= finish; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
