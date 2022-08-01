// kümeler - bir değeri sadece bir defa taşıyor

const myset = new Set();

myset.add(100);
myset.add(100); // bu 2.defa yazmaz.
myset.add(3.14);
myset.add("Sema");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:10,b:20});

const myset2 = new Set([100,3.14,"Sema"])

// console.log(myset);
// console.log(myset2);


// size
// console.log(myset.size);

//delete
// myset.delete("Sema");
// console.log(myset);


// has metodu - setin içinde o değer var mı yok mu kontrol ediyorum
// console.log(myset.has("Sema"));

// console.log(myset.has([1,2,3])); // false döner

// for each

// myset.forEach(function(value) {
//     console.log(value);
// })

// for off 

for(let value of myset) {
    console.log(value);
}


// setlerden array oluşturma

const array = Array.from(myset);

console.log(array);
