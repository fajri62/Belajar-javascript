/* LOOPING */

// for loop, mengulangkan kode sebanyak jumlah yang ditentukan(sudah diketahui berapa kali perulangan berjalan)

for (let i = 0; i <= 5; i++) {// pengulangan akan berhenti jika i <= 5 bernilai false
    console.log(`nomor ${i}`);
}

let buah = ["Apel", "Pisang", "Jeruk"];

for (let i = 0; i < buah.length; i++) {
    console.log(i, buah[i]); // Menampilkan indeks dan nilainya
}
// Output:
// 0 "Apel"
// 1 "Pisang"
// 2 "Jeruk"

// penggunaan nyata for
const pinBenar = "5432"; // PIN rahasia yang dicari

// Loop mencoba seluruh kemungkinan dari 0 sampai 9999
for (let i = 0; i <= 9999; i++) {
    // Mengubah angka 5 menjadi format 4 digit string "0005"
    let cobaPin = String(i).padStart(4, '0');
    
    if (cobaPin === pinBenar) {
        console.log(`PIN ditemukan! Jawabannya adalah: ${cobaPin}`);
        break; // Hentikan perulangan jika sudah ketemu
    }
}


// while loop, mengulangkan kode jika kondisi bernilai true(belum tahu pasti berapa kali perulangan berjalan)

let j = 0;
while (j <= 5) {
    console.log("test" + j);
    j++;
}

// penggunaan nyata while
// let password = "";
// while (password !== "1") {
//     password = prompt("Masukkan password:"); // Kita tidak tahu berapa kali pengguna akan salah mengetik
// }// Mengulang terus sampai pengguna memasukkan password yang benar


// do while loop, mengulangkan kode jika kondisi bernilai true

let k = 6; //walaupun 6 > 5 tetapi tetap di cetak 1 kali, berbeda dengan while dia tidak akan dicetak karena 6 > 5
do {
    console.log("do-while" + k);
    k++;
} while (k <= 5);


// for in loop
const object = {nama: "dimas",umur: 25,};

for (let property in object) {
    console.log(property);// menampilkan semua properti yang ada di object seperti nama, umur
    console.log(object[property]);// menampilkan nilai dari properti yang kita cari seperti dimas, 25
}


// for of loop
const array = ["a", "b", "c"];
for (let item of array) {
    console.log(item);
}
// Output:
// a
// b
// c