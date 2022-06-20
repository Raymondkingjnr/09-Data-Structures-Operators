'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  openingHours: {
    thu: {
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
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `order received ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//AN OBJECT OF OPTIONS
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole 21',
  starterIndex: 1,
});

///DESTRUCTURING

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// SWITCHING VARIBLES or  MUTATING ARRAYS
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainList] = restaurant.order(2, 1);

console.log(starter, mainList);

//NESTED IN ARRAYS
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

//Defalut values incase property dose not exist IN ARRAYS

const [p = 1, q = 1, r = 1] = [8, 7];

console.log(p, q, r);

////DESTRUCTION IN OBJECT important for APIS

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//CHANINGING PROPERTY NAME

const {
  name: restaurantName,
  openingHours: hours,
  categories: Tags,
} = restaurant;

console.log(restaurantName, hours, Tags);

//////////////DEFAULT VALUE IN OBJECT

const { Menu = [], starterMenu: starters = [] } = restaurant;

console.log(Menu, starters);

//MUTATING OBJECTS
let a = 45;
let b = 12;

const obj = { a: 7, b: 9, c: 10 };
({ a, b } = obj);

console.log(a, b);

//NESTED OBJECT
const {
  fri: { open: c, close: o },
} = openingHours;
console.log(c, o);

//SPREAD OPERATOR

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);

//USE CASES OF S.OPERATOR (1) TO CREATE SHALLOW COPIES OF ARRAYS (2)MERGE TWO ARRAYS TOGETHER

//COPY ARRAY

const mainMenuCopy = [...restaurant.mainMenu];

//JOIN 2 ARRAYS

const menu = [mainMenuCopy, ...restaurant.starterMenu];

console.log(menu);

// ITERABLES: ARRAYS STRINGS MAPS AND SETS BUT NOT OBJECTS
//WE CAN ONLY USE S.OPERATORS IN ARRAYS OR WHEN WE PASS VALUE TO A FUNCTION
//MULTIPLE VALUES SEPERATED BY A COMMA ARE USUALLY ONLY EXPECTED WHEN WE PASS AN ARGUMENT INTO A FUNCTION  OR WHEN WE BUILD A NEW ARRAY

/*
const ingredients = [
  prompt("let's make pasta Ingredients 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredients 3'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
*/

//OBJECTS

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Raymond' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorant Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
