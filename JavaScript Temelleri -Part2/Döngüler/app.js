// while

// let i = 0;

// while (i<10) {
//     console.log(i);
//     i+=1; // i++
// }

// let i = 10;

// while (i > 0) {
//     console.log(i);
    
//     // i--;

//     i -= 2;

// }


// break ve continue

// let i = 0;

// while (i<10) {
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
//     i ++;
// }

// let i = 0;
// while (i <10) {
//     if (i==3 || i==5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i ++;
// }

// do while döngüleri

// let i = 0;

// do {
//     console.log(i);
//     i++;

// } while(i < 10);


 // for

 const langs = ["Python","JavaScript","Java"];

//  let index = 0;

//  while(index < langs.length) {
//      console.log(langs[index]);

//      index ++;
//  }

// for (let index =0; index < langs.length; index++) {
//     console.log(langs[index]);
// }


//callback yapısı
// langs.forEach(function(lang,index){
//     console.log(lang, index);
// });


//map fonksiyonu

// const users = [
//     {name: "Sema", age:37},
//     {name:"Tolga", age:37},
//     {name:"Melis", age:7},
//     {name:"Venüs", age:4}
// ];

// const names = users.map(function(user) { 
//     return user.name;
// });

// const ages = users.map(function(user) {
//     return user.age;
// })
// console.log(names);
// console.log(ages);



const user = {
    name: "Sema",
    age: 37 
};

for (let key in user) {
    console.log(key,user[key]);
}
