// referans tipleri ve primitiv tipler

// let a = "Sema";
// let b = "Sema";

// if (a === b) {
//     console.log("Eşit");
// } // bu değerleri kontrol ediyor. 


//referans

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// const person1 = {
//     name: "Sema",
//     age:37
// }

// const person2 = {
//     name:"Sema",
//     age:37
// }

// if(array1 === array2) {
//     console.log("Eşit");
//     //false çıktı.
// } // çünkü bellekte referans tipinde içindeki değere bakmıyor.
// // aynı yeri gösteriyor mu diye bakıyor.

// if(person1 === person2) {
//     console.log("Eşit");
// } // yine false çıkar çünkü bellekteki yerleri farklı.


const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array");

console.log(cities.get("Ankara")); // içinde var mı yok mu 
// olarak kontrol ediyor, varsa dönüyor.

console.log(cities.get([1,2,3])); // undefined olarak döner


//eğer sen array i sorgulamak istiyorsan o zaman;

const key = [1,2,3];
cities.set(key,"Array");

console.log(cities.get(key)); // olarak aratman lazım.
