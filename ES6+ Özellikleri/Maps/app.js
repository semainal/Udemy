// maps - key(anahtar) -value(değer)
//python dictionarye benziyor.

// let myMap = new Map(); // oluşturma


// console.log(typeof myMap);

// const key1 = "Sema";
// const key2 = {a:10, b:20};
// const key3 = () => 2;


// set
// myMap.set(key1,"String Değer");
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");


//get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

//map boyutu

// console.log(myMap.size); // içinde kaç değer var görebiliriz


// const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// // for each
// // cities.forEach(function(value,key){
// //     console.log(key,value);
// // });

// // for of

// for(let value of cities) {
//     console.log(value);
// } // bunu parçalara ayırmak istersem destructing yapısını kullanabilirim


// for(let [key,value] of cities) {
//     console.log(key,value);
// }


// // sadece anahtarları almak istersem
// // map keys

// for (let key of cities.keys()) {
//     console.log(key)
// }

// // map values

// for (let value of cities.values()) {
//     console.log(value);
// }

// arraylerden map oluşturabiliriz
// const array = [["key1","valu12"],["key2","value2"]];

// const lastMap = new Map();


// maplerden array oluşturma

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
console.log(array);



