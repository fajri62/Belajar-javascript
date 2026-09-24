 /* IF ELSE */

let usia = 18;

 if (usia >=18) {
    console.log("anda sudah dewasa")
 } else {
    console.log("anda masih anak-anak")
 }

 // else if

 let umur = 65

 if (umur >= 1 && umur <= 17) {
    console.log("anda anak-anak")
 } else if (umur >= 18 && umur <= 50) {
     console.log("anda dewasa")
 } else {
     console.log("anda tua")
 }

 // nested if

 let nilai = 91;

 if (nilai >= 80){
    if (nilai <= 90) {
        console.log("A")
    } else {
        console.log("A+")
    }
 } else if (nilai >= 70) {
    console.log("B")
 }else {
    console.log("C")
 }



// menentukan bilangan ganjil/genap dengan if else

let angka = "2"; // string diubah secara otomatis menjadi number oleh JS karena operator perbandingan
// angka = Number(angka); // gunakan ini jika ingin mengubah string menjadi number secara manual

if (angka > 0) {
    if (angka % 2 === 0) {
        console.log("bilangan genap");
    } else {
        console.log("bilangan ganjil");
    }
} else if (angka < 0 ) {
    if (angka % 2 === 0) {
        console.log("bilangan genap negatif");
    } else {
        console.log("bilangan ganjil negatif");
    }
} else {
    console.log("bilangan nol");
}



let Usia = 6;

if ((Usia <= 17 && Usia >= 0) || (Usia >=50 && Usia <=100)) {
    console.log("Anda diperbolehkan menggunakan lift");
} else {
    console.log("Anda tidak diperbolehkan menggunakan lift");
}