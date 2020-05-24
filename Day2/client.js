// var fruits = require("./itemsModule").fruits; // this is the example of part module import

// var vegy = require("./ItemsModule").vegitables;
// for ( let fruit of fruits)
//     console.log(fruit);

// for(let veg of vegy)
// {
//     console.log(veg);
// }

var fruits = require("./itemsModule").fruits;

console.log(fruits);

fruits.sort();

console.log(fruits);

fruits.reverse();

console.log(fruits);
