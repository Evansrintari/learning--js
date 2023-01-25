'use strict';
const weekdays = ['mon', 'tue', 'wens', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ENHANCED OBJECT LITERALs
  openingHours,

  order(starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderDelivery({ starterIndex, mainIndex, address, time }) {
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
   will be delivered to ${address} at this ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      ` here is your pasta with ${ing1}, ${ing2},and  ${ing3} order paasta`
    );
  },
};
//optional chaining
restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);

//looping for arrays
//for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*
///////////////////////////////////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address: 'al ve dela, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// object destructuring  Curly Braces Ar used

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// we want variable name to be different from property name
//  this is helpful when dealing with third party data

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// defaults value
// we can also set default menu in object
// helpful when we dont have data hand coded like we have;
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// mutating variable while we are destructuring object

// you have to wrap those destructuring assignment into paranthesis

let a = 111;
let b = 999;
const obj = { a: 23, b: 43, c: 1 };
({ a, b } = obj);
console.log(a, b);

// Nested obj == retriev fri
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//REST Patern
const [pizza, , risoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risoto, otherFood);

//OBJECTs
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// FUNCTION
// rest parameter
const add = function (...number) {
  console.log(number);
};
add(2, 4);
add(2.3, 7, 5);
add(2, 3, 4, 5, 4, 3, 2);

//////////////////////////////////////////////////////
/////////// Spread  operator.....///////
// Destructuring
const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);
console.log(...newMenu);

// CopyArray

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// merge array
const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menuCopy);
console.log(...menuCopy);

//iterables

const str = 'Rintari';
const letters = [...str];
console.log(letters);

/*const ingredient = [
  prompt("let's make pasta ingredient1?"),
  prompt('ingredient2?'),
  prompt('ingredient3?'),
];
console.log(ingredient);

restaurant.orderPasta(...ingredient);
*/

// OBJECT
/*
const newRestaurant = { ...restaurant, founder: 'rintari', foundedIn: 1998 };
console.log(newRestaurant);

//SHORT CIRCUITING || AND &&
//USE ANY DATA TYPE RETURN DATA TYPE, SHORT CIRCUITING
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('----AND-----');

restaurant.orderPasta && restaurant.orderPasta('mushroom', 'spinach');

console.log('--------LOGICAL ASSIGNMENT');
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La-Piaza',
  owner: 'Giovani rossi',
};
// OR ASSIGNMENT OPERATOR

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

//And assignment operator

rest2.owner &&= '<ANONYMOUS>';
console.log(rest2);
// ////////////////////////////////////////////////////

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// recieve two return value from a function
const [starter, mainCourse] = restaurant.order(3, 1);
console.log(starter, mainCourse);

// what  happen when we have a nested array destructuring
const nested = ['mosh', 'kim', ['alma', 'ketiah']];

const [i, , [j, k]] = nested;

console.log(i, j, k);

// default values
// when we get data in  api we will be able to do all this
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
*/
