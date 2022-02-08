// fonskiyon tanımlama

// function merhaba(name = "Bilgi yok",age ="Bilgi yok") {
//     // if (typeof name === "undefined") name = "Bilgi yok";
//     // if (typeof age === "undefined") age = "Bilgi yok";



//     console.log(`İsim ${name} Yaş: ${age}`);
// }

// merhaba(); // function call (fonksyion çağrısı)

// merhaba("sema",37);

// merhaba("Melis", 5);

// merhaba("Kadir");


// function square (x) {
//     return x *x ;

//     console.log("naber") // return den sonra hiç bir kod çalışmaz
// }

// function cube (x) {
//     return x*x*x;
// }

// // let a = square(12);
// // a = cube(a); // aşağıdaki daha kolay bi yöntem

// let a = cube(square(12));

// console.log(a);


// function merhaba() {
//     return "merhaba";
// }

// console.log(merhaba());


// function exxpression

// const merhaba = function(name) {
//     console.log("merhaba " + name);
// };

// merhaba("Sema");

// immediately invoked function expression (IIFE) - TANIMLANDIĞI YERDE ÇALIŞAN FONKSİYON

// (function(name) {
//     console.log("Merhaba: " + name);
// })("Sema");


const database = {
    host: "localhosat",
    add: function() {
        console.log ("Eklendi");
    },
    get: function() {
        console.log("Elde edildi");
},
    update: function(id){
        console.log(`Id: ${id} güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} silindi`);
    } 
}

console.log(database.host);
database.add();
database.delete(10);










