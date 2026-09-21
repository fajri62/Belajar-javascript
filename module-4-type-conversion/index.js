// implisit conversion

let hasil = 5 + '5';
console.log(hasil, typeof hasil);

let hasil2 = 5 - '10';
console.log(hasil2, typeof hasil2);

// falsy value 0, null, undifined, ""
let test = !0;
console.log(test, typeof test);


// eksplisit conversion
// number to string
let num = 100;
let kata = String(num);

let kata2 = num.toString();

console.log(kata, typeof kata);
console.log(kata2, typeof kata2);

// string to number
let string = "22";

let num2 = parseInt(string);

console.log(num2, typeof num2);

