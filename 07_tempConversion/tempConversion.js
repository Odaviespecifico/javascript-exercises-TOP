const convertToCelsius = function(tempCelsius) {
  return +((((tempCelsius-32)/1.8)).toFixed(1))
};

const convertToFahrenheit = function(tempFahrenheieit) {
  return +((((tempFahrenheieit)*9/5 + 32)).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
