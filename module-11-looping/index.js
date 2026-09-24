/* LOOPING */

// for loop, mengulangkan kode sebanyak jumlah yang ditentukan(sudah diketahui berapa kali perulangan berjalan)

for (let i = 0; i <= 5; i++) {// pengulangan akan berhenti jika i <= 5 bernilai false
    console.log(`nomor ${i}`);
}

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
let password = "";
while (password !== "12345") {
    password = prompt("Masukkan password:"); // Kita tidak tahu berapa kali pengguna akan salah mengetik
}// Mengulang terus sampai pengguna memasukkan password yang benar

// do while loop, mengulangkan kode jika kondisi bernilai true

let k = 0;
do {
    console.log("test" + k);
    k++;
} while (k <= 5);