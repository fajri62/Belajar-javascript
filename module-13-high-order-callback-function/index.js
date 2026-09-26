// Higher-Order Callback Function

/*  higher-order function adalah function yg menerima funcction lain sebagai argumen
 atau mengembalikan function lain sebagai hasil.  */

/* callback function adalah function yg dikirim sebagai argumen ke function lain
dan dipanggil di dalam function tersebut. */

function selesaikanTugas(tugas, callback){  // higher-order function
    console.log(`menyelesaikan tugas ${tugas}`);
    callback();
}

function tugasSelesai (){  // callback function
    console.log('tugas selesai');
}
selesaikanTugas('belajar javascript', tugasSelesai);