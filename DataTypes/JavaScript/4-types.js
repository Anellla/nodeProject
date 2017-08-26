'use strict';

const i = 5;
const s = 'Hello';
const b = true;
const f = 10.3;

const o = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
  position: 'emperor'
};
o.addedProperty = 'working';
o.born = 345;
console.log({o})
const a = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
a[6] = 'Lviv';
console.log({ i }, typeof(i));
console.log({ s }, typeof(s));
console.log({ b }, typeof(b));
console.log({ f }, typeof(f));
console.log({ o }, typeof(o));
//console.log({ o }, Array.isArray(o));
console.log({ a }, typeof(a));
//console.log({ a }, Array.isArray(a));
//a[6] = 'Lviv';