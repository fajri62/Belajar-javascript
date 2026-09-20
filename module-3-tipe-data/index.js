/*TIPE DATA PRIMITIF*/
// string
const nama = 'Dimas';
const domisili = `${nama} Jakarta`;
console.log(nama, typeof nama);
console.log(domisili , typeof domisili);

// number
const umur1 = 20;
console.log(umur1, typeof umur1);

// boolean
const isMarried = false;
console.log(isMarried, typeof isMarried);

// undifined
let umur;
console.log(umur, typeof umur);

// null
const umur2 = null;
console.log(umur2, typeof umur2);

// symbol
const id = Symbol('id');
console.log(id, typeof id);

//bigint
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt, typeof bigInt);

/*tipe data reference */

// object
const person = {
    nama: 'Dimas',
    umur: 20,
    isMarried: false
};
console.log(person.nama);

// array
const idd = ['Dimas', 20, false];
console.log(idd[2]);


// function
// 1. Membuat fungsi
function LuasSegitiga (alas, tinggi) {
  return alas * tinggi / 2;
}

// 2. Memanggil fungsi
let segitiga1 = LuasSegitiga(10, 9);
let segitiga2 = LuasSegitiga(3, 3);
let segitiga3 = LuasSegitiga(5,10);

console.log(segitiga1, segitiga2, segitiga3);