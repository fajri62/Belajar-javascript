/* DATE OBJECT*/

//tanggal dan waktu saat ini
let now = new Date();
console.log(now); //mengembalikan tanggal dan waktu saat ini

//menggunakan string untuk membuat objek tanggal
let date1 = new Date("2023-06-01 10:30:00");
console.log(date1); //mengembalikan tanggal 1 Juni 2023

// menggunakan parameter spesifik untuk membuat objek tanggal (tahun, bulan, tanggal, jam, menit, detik)
let date2 = new Date(2023, 5, 1, 10, 30, 0);
console.log(date2); //mengembalikan tanggal 1 Juni 2023, jam 10:30:00

// mengambil informasi dari objek tanggal
let today = new Date();
console.log(today.getFullYear()); //mengembalikan tahun saat ini
console.log(today.getMonth()); //mengembalikan bulan saat ini (0-11, Januari = 0)
console.log(today.getDate()); //mengembalikan tanggal saat ini (1-31)
console.log(today.getDay()); //mengembalikan hari saat ini (0-6, Minggu = 0)
console.log(today.getHours()); //mengembalikan jam saat ini (0-23)
console.log(today.getMinutes()); //mengembalikan menit saat ini (0-59)
console.log(today.getSeconds()); //mengembalikan detik saat ini (0-59)
console.log(today.getMilliseconds()); //mengembalikan milidetik saat ini (0-999)

// mengatur tanggal dan waktu
let date3 = new Date();
date3.setFullYear(2024); //mengatur tahun menjadi 2024
date3.setMonth(11); //mengatur bulan menjadi Desember (0-11)
date3.setDate(25); //mengatur tanggal menjadi 25

// perhitungan waktu dengan date object
let start = new Date(2024, 9, 1, 10, 30, 0); // 1 Oktober 2024, jam 10:30:00
let end = new Date(2024, 10, 1, 12, 45, 0); // 1 November 2024, jam 12:45:00
let diff = end - start;
console.log(diff); // mengembalikan selisih waktu dalam milidetik

let diffInDays = diff / (1000 * 3600 * 24); //mengubah milidetik menjadi hari. 1000 milidetik = 1 detik, 3600 detik = 1 jam, 24 jam = 1 hari
console.log(diffInDays); //mengembalikan selisih waktu dalam hari
