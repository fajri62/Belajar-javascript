/* var, dia bisa diakses diluar scope, dan bisa diubah nilainya
let, dia tidak bisa diakses diluar scope, dan bisa diubah nilainya
const, dia tidak bisa diakses diluar scope, dan tidak bisa diubah nilainya
*/

if(true){
    var nama = 'Dimas';
    console.log(nama);
} //scope 
console.log(nama);
// console.log(nama); // bisa diakses diluar scope

if(true){
    let nama2 = 'Dimas';
    console.log(nama2);
} //scope 
console.log(nama2);
// console.log(nama2); // tidak bisa diakses diluar scope

if(true){
    const nama3 = 'Dimas';
    console.log(nama3);
} //scope 
console.log(nama3);
// console.log(nama3); // tidak bisa diakses diluar scope