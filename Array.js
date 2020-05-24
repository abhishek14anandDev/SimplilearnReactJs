var items = [];

console.log(typeof items);

var items1 = new Array()

console.log(typeof items1);

var items = ['pen', 'pencil','eraser'];

console.log(items[0]);

for(var i =0; i<items.length; i++)
    console.log(items[i]);

for(let item of items)
    console.log(item);

for(var i in items)
    console.log(items[i]);
