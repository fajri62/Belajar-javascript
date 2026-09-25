/* FUNCTION DECLARATION */

// function keyword digunakan untuk membuat fungsi
function sapaPengguna(nama) {
    console.log(`Halo, ${nama}!`);
}
sapaPengguna('Budi'); // memanggil function


function sapaPengguna2() {
    console.log('Halo!');
}
sapaPengguna2(); // memanggil function


// parameter adalah variabel yang digunakan untuk menyimpan nilai yang diberikan ke function
// argument adalah nilai yang diberikan ke function

function penjumlahan(a, b) { // a dan b adalah parameter
    console.log(a + b);
}
penjumlahan(2, 3); // 2 dan 3 adalah argument


function penjumlahan(a, b) {
    return a + b; // return adalah keyword yang digunakan untuk mengembalikan nilai dari function
} // return harus berada di paling bawah karen setelah return dieksekusi, function akan berhenti dijalankan
console.log (penjumlahan(2, 3)); // 2 dan 3 adalah argument


function kuadrat(angka) {
    if (angka > 0) {
        return angka * angka; // jika angka kurang dari 0 maka if akan di skip dan return tidak akan berlaku
} return 'Angka harus positif!';// jika angka lebih dari 0 maka return di if akan berlaku dan return ini akan di skip
}


let kuadrat1 = kuadrat(4);
console.log(kuadrat1);




/* FUNCTION EXPRESSION */

let perkalian = function (a, b) {
    return a * b;
}
let a = perkalian(2, 3);
console.log(a);



/* ARROW FUNCTION */
// arrow function adalah cara singkat untuk menulis function expression
let perkalian2 = (a, b) => {
    return a * b;
}
let a2 = perkalian2(2, 3);
console.log(a2);


// jika hanya memiliki satu pernyataan maka tanda kurung kurawal dan return bisa dihilangkan
let perkalian3 = (a, b) => a * b;
let a3 = perkalian3(2, 3);
console.log(a3);

/*_______________________________________________________________________________________________________________________________________ */


/* IFFE  (imediately-invoked function expression) */

/* IFFE adalah function yang dipanggil langsung setelah dibuat, 
   ini berguna untuk menginisialisasi variable dan mencegah mengganggu kode lain */

(function(){
    console.log('Halo!');
})(); // function langsung dipanggil secara otomatis

const appConfig = (function(){
    const apiKey = "abc123";
    const apiURL = "https://api.example.com";

    return {
        getApiKey: function(){
            return apiKey;
        },
        getApiURL: function(){
            return apiURL;
        }
}})();

console.log(appConfig.getApiKey());
console.log(appConfig.getApiURL());