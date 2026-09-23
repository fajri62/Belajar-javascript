/* MATH OBJECT */
let a = 10;
//metode math
console.log(Math.abs(-5)); //mengembalikan nilai absolut dari angka
console.log(Math.pow(2, 3)); //mengembalikan nilai pangkat dari angka
console.log(Math.sqrt(16)); //mengembalikan nilai akar kuadrat dari angka
console.log(Math.cbrt(8)); //mengembalikan nilai akar kubik dari angka
console.log(Math.max(8, 3, 5, 1)); //mengembalikan nilai maksimum dari angka
console.log(Math.min(8, 3, 5, 1)); //mengembalikan nilai minimum dari angka

//pembulatan angka
console.log(Math.round(4.7)); //mengembalikan nilai pembulatan ke nilai terdekat
console.log(Math.ceil(4.001)); //mengembalikan nilai pembulatan ke atas
console.log(Math.floor(4.999)); //menghilangkan angka dibelakang koma

//random number
console.log(Math.random()); //mengembalikan nilai random antara 0 dan 1
console.log(Math.floor(Math.random() * 10)); //mengembalikan nilai random antara 0 dan 9