'use strict';
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh you are a mellenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);

    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Nesh';
calcAge(1991);
// only the inner scope cAN have access to the ouut scope

// HOISTING
// LET USE THIS VARIABLES BEFORE DECLARING THEM

// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProduct) deleteShoppingCart();
var numProduct = 10;
function deleteShoppingCart() {
  console.log('all product deleted');
}

// THIS keywords

console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calAge(1992);

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
// arrow function does not gets its own arrow function
//uses this function of the parent scope i.e lexical this keyword....

calAgeArrow(1992);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2047 - this.year);
  },
};

jonas.calAge();

const maltida = {
  year: 2020,
};

maltida.calAge = jonas.calAge;
maltida.calAge();
