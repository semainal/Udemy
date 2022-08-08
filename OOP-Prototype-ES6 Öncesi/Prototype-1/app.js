// const object = new Object(); // object Literal
// const object2 = new Object();
// object.name = "Sema";
// console.log(object);

function Employee(name,age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler Gösteriliyor..")
    }
    this.toString = function() {
        console.log("Bu bir Employee objesi..")
    }
}

const emp1 = new Employee("Sema",37);
console.log(emp1);

console.log(emp1.toString());