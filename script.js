"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("i can drive");
/*
function logger() {
  console.log("My name is Jonas");
}

// call the function, running, invocking

logger();
logger();

//function can recieve data and return data as well
// data is passed into a function
// thinking a function as machine.

// parameter are like variables,
//  that are only specific to this function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// argument
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/
// different way of writting function
// in function declaration you can call
//  a function befor you declare it
// happen because of hoisting

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// annymous function ---function expression
// const calcAge2 = function (birthYear) {
// return 2037 - birthYear;
// };
// const age2 = calcAge2(1971);
// console.log(age2);
//
// Arrow function
// shorter and faster to write-- return happen implicitly

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};
console.log(yearsUntilRetirement(1999, "jonas"));
console.log(yearsUntilRetirement(2002, "krishna"));

// calling one function inside another function
function cutFruitpieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitpieces(apples);
  const orangePieces = cutFruitpieces(oranges);

  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// ARRAYS
// arrays are zero based
/*
const friends = ["Micheal", "steven", "peter"]; //leteral syntax
console.log(friends);
const years = new Array(1991, 1992, 200, 2020);
console.log(years);
console.log(friends[0]);

// getting the actual number of property that are in the array
console.log(friends.length);

//retrieving an element from an array

console.log(friends[friends.length - 1]);

// mutating the array or changing the array
friends[2] = "jay";
console.log(friends);

const rintari = ["jonas", "evans", "rintari", 2037 - 1919, "learner", friends];
console.log(rintari);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const year = [1990, 1997, 2002, 2018];
const ages = [
  calcAge(year[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);*/

// /methods ae Array function

const friends = ["Micheal", "steven", "peter"];
//since push is a function it can therefor return something
//
const newLength = friends.push("jay");
friends.unshift("geradd");
console.log(newLength);
console.log(friends);

// remove
friends.pop();
//return something i.e wat is being removed
const popped = friends.pop();
console.log(popped);
console.log(friends);

// include it return true if the element is in the array

// rthis metod can be used to write coditionals
console.log(friends.includes("steven"));
console.log(friends.includes("bob"));

if (friends.includes("steven")) {
  console.log("you have the friend called steven");
}

// OBJECTS
// is a data structure we actually define key value pairs
// we use curly bracess
/*const jonas = {
  firstName: "jonas",
  lastName: "schedmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["martin", "leo", "syste"],
};
// the order does not matter at all when we want to retrieve them
// how do weget data
// how to dow retrieve the data uasing the dATA  notation and bracket

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["firstName"]);

/*const interestedIn = prompt(
  "what do you want to know about jonas? Choose between job,firstname, lastname, friends, age"
);
//

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'wrong request! Choose between job,firstname, lastname, friends, age" '
  );
}
*/ /*
// adding new location
jonas.location = "portugal";
jonas["twiter"] = "@jonasschemedman";
console.log(jonas);
//  challenge

console.log(
  `${jonas.firstName} has ${jonas.friends.length}, and his bnest friend is called${jonas.friends[0]}`
);*/
//
const jonas = {
  firstName: "jonas",
  lastName: "schedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["martin", "leo", "syste"],
  hasDriversLicense: true,
  // always keep the code dry
  //  special variable called(this)
  // this is == to the object  calling the method
  // this point to jonas(object)

  calcAge4: function () {
    console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge4()} year old ${
      this.job
    }, and he has  ${this.hasDriversLicense ? "a" : "NO"} drivers lincences`;
  },
};
console.log(jonas.calcAge4());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// challange 2
console.log(jonas.getSummary());

//'LOOPS
// alloWs to automate repetetive task

// for (let rep = 1; rep <= 10; rep++) {
// console.log(`hit the gym🏋️‍♂️${rep}🏋️‍♂️`);
// }

//aarays using the for loo

const john = [
  "john",
  "miriti",
  2037 - 1968,
  "teacher",
  ["micheal", "jamba", "maritime"],
  true,
];
const types = [];
for (let i = 0; i < john.length; i++) {
  console.log(john[i]);

  // filling an array
  // types[i] = typeof john[i];
  types.push(typeof john[i]);
}
console.log(types);

// const years = [1991, 2002, 1983, 1959, 1971];
// const ages = [];
//
// for (let i = 0; i < years.length; i++) {
// ages.push(2037 - years[i]);
// }
//
// console.log(ages);
//
// CONTINUE AND BREAK
// exit the current itteration of the loop and continue to the next one
// break is used to completely terminate the whole loop

for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i], typeof john[i]);
}

console.log("--ONLY BREAK WITH NUMBER---");
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] === "number") break;
  console.log(john[i], typeof john[i]);
}

const joel = [
  "john",
  "miriti",
  2037 - 1968,
  "teacher",
  ["micheal", "jamba", "maritime"],
];
//loop from 4,3,2,1,0

for (let i = joel.length - 1; i >= 0; i--) {
  console.log(joel[i]);
}

// loop inside a loop
// ther are different exercise anfd we want to repeat each of them three times
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------starting exercises${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`liftingg weight repetitive${rep} 🏋️‍♂️`);
  }
}

let rep = 10;
while (rep >= 1) {
  console.log(
    `while lifting the weight the is no other business left in this occurrance ${rep}`
  );
  rep--;
}

// while loop is more versatile than the for loop
// it means that it can be used in a larger grounds than for loop

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("loop is about to end");
  }
}
////const calcAge5 = (birthYear) => console.log(1965);

let;
