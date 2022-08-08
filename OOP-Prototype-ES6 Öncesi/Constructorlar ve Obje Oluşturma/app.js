// console.log(window);
// console.log(this); // global scope

// const emp1 = { // object literal
//     name: "Sema",
//     age: 37,
//     showInfos: function() {
//         console.log("Bilgiler Gösteriliyor..");
//     }
// };

// const emp2 = {
//     name: "Melis",
//     age: 7
// };

// emp1.salary = 15000;
// emp1.showInfos();

//yapıcı fonksiyon -constructor
function Employee(name,age,salary) {
   this.name = name;
   this.age = age;
   this.salary =salary;

//    console.log(this);

    this.showInfos = function() {
        console.log(this.name,this.age, this.salary);
    }
}

// const emp1 = new Employee();
// const emp2 = new Employee();

// console.log(emp1);
// console.log(emp2);

const emp1 = new Employee("Sema",37,15000);
const emp2 = new Employee("Tolga",37,200000);

// console.log(emp1);
// console.log(emp2);

emp1.showInfos();
emp2.showInfos();