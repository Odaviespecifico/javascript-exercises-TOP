const removeFromArray = function(array,...remove) {
    for (let i = 0; i < remove.length; i++) {
        if (array.indexOf(remove[i]) == -1) {
            console.log(`did not remove`)
            continue
        }
        else{
            console.log(remove[i])
            console.log(`${array.indexOf(remove[i])}`)
            array.splice(array.indexOf(remove[i]),1)
        }
        if (array.indexOf(remove[i]) != -1) {
            i -= 1
        }

        console.log(`My array after removing ${array}`)
    }
    return array
   
};
removeFromArray([1,2,2,4,5],2)
// Do not edit below this line
module.exports = removeFromArray;
