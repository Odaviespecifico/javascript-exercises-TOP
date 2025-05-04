const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
  let soma = 0
  for (let index = 0; index < a.length; index++) {
    const element = +a[index];
    soma += element
  }
  return soma
};

const multiply = function(a) {
  let mult = 1
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    mult *= element
  }
  return mult
  }

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  fac = 1
	for (let i = a; i >  0; i--) {
    fac *= i
  }
  return fac
};

console.log(factorial(5))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
