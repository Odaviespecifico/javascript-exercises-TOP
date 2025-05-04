const findTheOldest = function(people) {
    let oldest = ''
    biggerage = 0
    people.forEach(element => {
        let birth = element['yearOfBirth']
        let death = element['yearOfDeath']
        console.log(death)
        if (death == undefined) {
            death = new Date().getFullYear()
        }
        let age = death - birth

        if (age > biggerage) {
            oldest = element
            biggerage = age
        }
    });
    return oldest
};
// Do not edit below this line
module.exports = findTheOldest;
