'use strict';

const scalar = 5;
const object1 = {
 //skalar 
 scalar: 9
};
const object2 = object1;

//object1.scalar = 6;

console.log({ object1 });
console.log({ object2 });
console.dir({ scalar });
