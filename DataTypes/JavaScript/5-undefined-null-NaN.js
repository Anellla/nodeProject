'use strict';

// undefined

let u;
console.log({ u }, typeof(u));

// null

let o = null;
console.log({ o }, typeof(o));
console.log({ o }, Array.isArray(0));

// null

let n = NaN;
console.log({ n }, typeof(n));

n = undefined + 1;
console.log({ n }, typeof(n));
