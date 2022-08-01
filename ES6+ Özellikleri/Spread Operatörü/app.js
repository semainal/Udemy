// spread operator

// const langs = ["Python","C++","Java","Php"];

// // console.log(langs[0],langs[1], langs[2], langs[3]);

// console.log(...langs); //atlayarak yazdırıyor

// const langs2 = ["Javascript","C++",...langs]; // dizileri birleştirdik

// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...numbers2] = numbers;

// console.log(a,b);
// console.log(numbers2); // a ve b 0.ve 1.indexe atandı, geri kalanlar yeniden 0.indexten başladı.


const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

addNumbers(...numbers); // tek tek numbers[0],numbers[1] yazmak yerine en kısa işlemi.

