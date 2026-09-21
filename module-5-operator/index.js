/* OPERATOR ARITMATIKA */

// penjumlahan +

let a = 10;
let b = 5;
let sum = a + b;

console.log(sum);

// pengurangan -

let min = a - b;
console.log(min);

// perkalian *

let perkalian = a * b;
console.log(perkalian);

// pembagian /

let pembagian = a / b;
console.log(pembagian);

// operasi modulus || sisa bagi %

let modulus = a % b;
console.log(modulus);

// operasi eksponen || pangkat **

let eksponen = a ** b;
console.log(eksponen);

// operator increment ++
let increment = 10;
increment++;
console.log(increment);

// operator decrement --
let decrement = 5;
decrement--;
console.log(decrement);


/* OPERATOR ASIGNMENT */

// asignment dasar =
let z = 76;
console.log(z);

// asignment dan penjumlahan +=
z += 3; 
console.log(z);

// asignment dan perkalian *=
let l = 50;
l *= 2;
console.log(l);

// asignment dan pembagian *=
let k = 100;
k /= 2;
console.log(k);


/* OPERATOR PERBANDINGAN */

// == membandingkan persamaan nilai
let persamaan1 = 10;
let persamaan2 = "10";
let hasilPersamaan = persamaan1 == persamaan2;
console.log(hasilPersamaan);

// === membandingkan persamaan nilai dan tipe data
let persamaan3 = 10;
let persamaan4 = "10";
let hasilPersamaanStrik = persamaan3 === persamaan4;
console.log(hasilPersamaanStrik);

// != membandingkan ketidaksamaan nilai
let ketidaksamaan1 = 10;
let ketidaksamaan2 = "10";
let hasilKetidaksamaan = ketidaksamaan1 != ketidaksamaan2;
console.log(hasilKetidaksamaan);

// !== membandingkan ketidaksamaan nilai dan tipe data
let ketidaksamaan3 = 10;
let ketidaksamaan4 = "10";
let hasilKetidaksamaanStrik = ketidaksamaan3 !== ketidaksamaan4;
console.log(hasilKetidaksamaanStrik);

/* OPERATOR LOGIKA */

// && operator logika AND: menghasilkan true jika kedua operand bernilai true
let logika1 = true;
let logika2 = false;
let hasilLogikaAnd = logika1 && logika2;
console.log(hasilLogikaAnd);

// || operator logika OR: menghasilkan true jika salah satu operand bernilai true
let logika3 = true;
let logika4 = false;
let hasilLogikaOr = logika3 || logika4;
console.log(hasilLogikaOr);

// ! operator logika NOT: menghasilkan true jika operand bernilai false
let logika5 = true;
let hasilLogikaNot = !logika5;
console.log(hasilLogikaNot);

/* OPERATOR TERNARY */

let nilai = 75;
let hasil = (nilai >= 60) ? "Lulus" : "Tidak Lulus";
console.log(hasil);