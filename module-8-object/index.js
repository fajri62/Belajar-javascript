/* OBJECT */

// object literal
let mahasiswa = {
    nama: "Budi",
    umur: 20,
    jurusan: "Teknik Informatika",
    alamat: "bekasi"
};

console.log(mahasiswa); // mengembalikan { nama: "Budi", umur: 20, jurusan: "Teknik Informatika", alamat: "bekasi" }
// mengakses properti object
console.log(mahasiswa.nama); // mengembalikan "Budi"

// object constructor
let buku = new Object();
buku.judul = "Pemrograman JavaScript";
buku.pengarang = "John Doe";
buku.tahun = 2023;

console.log(buku); // mengembalikan { judul: "Pemrograman JavaScript", pengarang: "John Doe", tahun: 2023 }
// mengakses properti object
console.log(buku["judul"]); // mengembalikan "Pemrograman JavaScript"

// menambahkan properti baru ke object
mahasiswa.email = "budi@example.com";
console.log(mahasiswa); // mengembalikan { nama: "Budi", umur: 20, jurusan: "Teknik Informatika", alamat: "bekasi", email: "budi@example.com" }

buku.harga = 150000;
console.log(buku); // mengembalikan { judul: "Pemrograman JavaScript", pengarang: "John Doe", tahun: 2023, harga: 150000 }

// mengubah properti object
mahasiswa.umur = 21;
console.log(mahasiswa); // mengembalikan { nama: "Budi", umur: 21, jurusan: "Teknik Informatika", alamat: "bekasi", email: "budi@example.com" }

//menghapus properti object
delete mahasiswa.alamat;
console.log(mahasiswa); // mengembalikan { nama: "Budi", umur: 21, jurusan: "Teknik Informatika", email: "budi@example.com" }

// nested object
let universitas = {
    nama: "Universitas Indonesia",
    fakultas: {
        nama: "Fakultas Ilmu Komputer",
        jurusan: {
            nama: "Teknik Informatika"
        }
    }
};
console.log(universitas.fakultas.jurusan.nama); // mengembalikan "Teknik Informatika"

//destructuring object
let { nama, umur, jurusan } = mahasiswa;
console.log(nama); // mengembalikan "Budi"

