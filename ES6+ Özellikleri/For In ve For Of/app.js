const person = {
    name: "Sema İnal",
    age: 37,
    salary: 15000
};

const langs = ["Python", "Java","C++", "Php"];

const name = "Sema";

// For in
// obje üzerinde gezinme işlemi

for (let prop in person) {
    console.log(prop);
} // for in sadece name,age, salary üzerinde geziniyor. 
// içerik bilgisi alamadık.

for (let prop in person) {
    console.log(prop, person[prop]);
} // özelliklerin karşılığını bu şekilde alabiliriz.


//array
for (let index in langs) {
    console.log(index, langs[index]);
}

// string

for (let index in name) {
    console.log(index,name[index]);
}


// for off - objelerin üzerinde gezinemiyoruz, sadece arraye benzeyen veri tipleri üzerinde gezinebiliyoruz.

// for (let value of person) {
//     console.log(value);
// } // type error verir. bunun üzerinde for of döngüsüyle gezinemezsin.

for (let value of langs) {
    console.log(value)
;}

for (let character of name) {
    console.log(character);
    
}