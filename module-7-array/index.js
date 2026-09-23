/* ARRAY */
let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits); //mengembalikan ["apple", "banana", "orange", "grape"]
//mengakses elemen array
console.log(fruits[0]); //mengembalikan "apple"
console.log(fruits[2]); //mengembalikan "orange"

fruits[1] = "kiwi"; //mengubah elemen array
console.log(fruits); //mengembalikan ["apple", "kiwi", "orange", "grape"]

fruits.push("mango"); //menambahkan elemen baru ke array
console.log(fruits); //mengembalikan ["apple", "kiwi", "orange", "grape", "mango"]

fruits.pop(); //menghapus elemen terakhir dari array
console.log(fruits); //mengembalikan ["apple", "kiwi", "orange", "grape"]

fruits.shift(); //menghapus elemen pertama dari array
console.log(fruits); //mengembalikan ["kiwi", "orange", "grape"]

fruits.unshift("strawberry"); //menambahkan elemen baru di awal array
console.log(fruits); //mengembalikan ["strawberry", "kiwi", "orange", "grape"]

fruits.length; //mengembalikan panjang array
console.log(fruits.length); //mengembalikan 4

fruits.concat(["pear", "peach", "plum"]); //menggabungkan dua atau lebih array
console.log(fruits.concat(["pear", "peach", "plum"])); //mengembalikan ["strawberry", "kiwi", "orange", "grape", "pear", "peach", "plum"]

console.log(fruits); //mengembalikan ["strawberry", "kiwi", "orange", "grape"] karena fruits.concat tidak mengubah array fruits

fruits.slice(1, 3); //mengambil elemen array dari index 1 sampai index 2
console.log(fruits.slice(1, 3)); //mengembalikan ["kiwi", "orange"]
console.log(fruits); //mengembalikan ["strawberry", "kiwi", "orange", "grape"] karena fruits.slice tidak mengubah array fruits

fruits.splice(1, 2, "blueberry"); //menghapus elemen array dari index 1 sebanyak 2 elemen dan menambahkan "blueberry"
console.log(fruits); //mengembalikan ["strawberry", "blueberry", "grape"] karena fruits.splice mengubah array fruits

console.log(fruits.indexOf("grape")); //mengembalikan index dari elemen "grape" yaitu 2
console.log(fruits.includes("kiwi")); //mengembalikan false karena "kiwi" tidak ada di array fruits


//nested array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]); //mengembalikan 2


