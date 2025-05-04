const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (string) {
    string = string.replaceAll('.','').toUpperCase()
    string = string.replaceAll(',','')
    string = string.replaceAll('!','')
    string = string.replaceAll('.','')
    string = string.replaceAll(' ','')
    stringArray = string.split('')

    let reversedstring = []
    for (let i = 0; i < string.length; i++) { 
        reversedstring += stringArray.at(-i-1)
    }
    stringArray = stringArray.join('')
    if (stringArray == reversedstring) {
        return true
    }
    else {
        return false
    }
};

palindromes('My perfect string')
// Do not edit below this line
module.exports = palindromes;
