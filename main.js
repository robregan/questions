// questions for the dab master!

// 1) can you explain how this is working? i understand it will return the keys but can you elaborate on this forEach a little?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP):

// { C: 2, JavaScript: 1, Ruby: 1 }

function countLanguages(list) {
    var count = {};
    list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
    return count;
  }

// 2) what is the plus sign doing here?

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } )
     }

// Leon touched on this (#3) breifly last class but if you can go into a little more detail (can you explain rest parameter vs spread parameter)
// 3) could you please go over the spread operator? (...obj) is it just copying all the keys/values from obj to be used else where? 

let arr = [1, 2, 3];
let arr2 = [...arr]; 

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected 

// 4) XOR operator.. if we can get a translation or an ELI5 on the following that would be just wonderful.. (i have a codewars example with a two page explaination and still dont really understand. it is right after MDN's explaination..)  The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s. The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32 bit integer:
// Before: 11100110111110100000000000000110000000000001
// After:              10100000000000000110000000000001
// Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.

// The operator is applied to each pair of bits, and the result is constructed bitwise.

// codewars example: Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// solution 1) // this one i can understand mostly
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
// solution 2) 
const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

// description of solution by u/blade-sensei
// ^ = means XOR operation
// Capital letters as A or B or X are the result of a xor operation.

// 1. Truth table
// --- 

// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0

// (this is usefull to undertand second thing below)

// 2. Properties: 

// A ^ A = 0 ( ex: 10 ^ 10 = 0 )
// A ^ 0 = A 

// (ps: we don't need other properties to undertand)

// 3. Associativity:

// a ^ b ^ c = a ^ c ^ b
// or even
// a ^ b ^ c ^ d = a ^ c ^ d ^ b

// So this means that the priority order of operations 
// can be changed, this is not mandatory to start by doing a ^ b operation.
// OK now real examples/practice

// [10, 3, 20, 10, 3, 20, 10]
// here 10 is the number that is repeated odd times

// Ps: if you don't know how reduce acts, check this:
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

// This solution will iterate like this.
// - 10 ^ 3 = A (it's 9 but we dont need to know real results)
// - A ^ 20 = B it's the same as 10 ^ 3 ^ 20 so B = 10 ^ 3 ^ 20 ..and so on
// - 10 ^ 3 ^ 20 ^ 10. At this moment we can use associativity, change the order or prio operations
//   so we can write 10 ^ 10 ^ 3 ^ 20, now use the properties (A ^ A = 0)
//   so 10 ^ 10 = 0 ... then 0 ^ 3 ^ 20. Again use the property (A ^ 0 = A)..
//   so 0 ^ 3 ^ 20 = 3 ^ 20. we continu iteration ... 
  
// - 3 ^ 20 ^ 3 .. Again use associativity and properties, the result here is 20
// - 20 ^ 20 = 0, then last iteration
// - 0 ^ 10 = 10 ! 

// As you see the behaviour is than: if at a time we meet/encounter a number thats already IN previous 
// XOR operations .. like : [a] ^ b ^ c ^ [a] the reapeated number is somehow canceled or removed.

// Thats why XOR operation can resolve this kind of problem. but only with this particulary prerequisites.

// 5) could you do a quick regex tutorial maybe with match() or replace() 
// this makes sense:
// let str = 'Twas the night before Xmas...';
// let newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr);  // Twas the night before Christmas...

// but not sure about global and ignore and this syntax is just bonkers looking:

// The following example replaces a Fahrenheit degree with its equivalent Celsius degree. The Fahrenheit degree should be a number ending with "F". The function returns the Celsius number ending with "C". For example, if the input number is "212F", the function returns "100C". If the number is "0F", the function returns "-17.77777777777778C".

// The regular expression test checks for any number that ends with F. The number of Fahrenheit degree is accessible to the function through its second parameter, p1. The function sets the Celsius number based on the Fahrenheit degree passed in a string to the f2c() function. f2c() then returns the Celsius number. This function approximates Perl's s///e flag.

function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
