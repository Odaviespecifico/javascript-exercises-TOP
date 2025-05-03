const reverseString = function(string) {
    list_chacters = string.split('')
    newstring = ''
    for (let i = 0; i < list_chacters.length; i++) {
        newstring += list_chacters.at(-1-i)
    }
    return newstring
    console.log(newstring)
};
// Do not edit below this line
module.exports = reverseString;
