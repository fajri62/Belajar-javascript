// RECURCION

/* Recursion terjadi ketika function memanggil dirinya sendiri secara langsung
atau tidak langsung untuk memanyelesaikan sebagian dari masalah. 
Recursion biasanya digunakan untuk memecahkan masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil. */

// base case adalah kondisi yang menghentikan rekursi, sehingga tidak terjadi infinite loop.

// recursive case adalah kondisi yang memanggil dirinya sendiri untuk menyelesaikan masalah yang lebih kecil.

function faktorial(n){
    // base case
    if (n === 0){
        return 1;
    }
    // recursive case
    return n * faktorial(n - 1);
}
console.log(faktorial(5));