// 3 farklı scope kavramı (kapsam) var
//1.global 2.function 3.block

//global scope
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func () {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3)
// }
// Func();

// console.log(value1, value2, value3);



// if(true) {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3);
// }

// console.log(value1,value2,value3);
// // block içerisinde tanımlanmış olan değerlerden sadece var
// //değerine sahip olan yazaılıyor. çünkü b ve c (let-const) anahtar
// // kelimeleriyle yazıldılar. scope da tanımlı olmadıkları için hata
// // veriyor.

// // var la atama yaparsam da global scopetaki değerimi de değiştiriyor.

// console.log(a);
// console.log(b);
// console.log(c);


var database = "123456";
console.log(database); // => 123456

if(true) {
    var database = "343434";
    console.log(database);
} //=> 343434

console.log(database); //=> 343434

// *** global scope ta var kullanma

