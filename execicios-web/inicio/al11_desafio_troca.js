let a = 7;
let b = 94;
const c = b;

console.log('b: ' + b);
console.log('a: ' + a);

b = a;
a= c;

console.log('\nb: ' + b);
console.log('a: ' + a);

a = 7;
b = 94;

[a, b] = [b, a]

console.log('\nb: ' + b);
console.log('a: ' + a);
