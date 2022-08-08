// syntactic sugar

// function Employee(name,age,salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary
// }

// Employee.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

// }

// const emp = new Employee("Sema",37,15000);

// console.log(emp);

//es6

class Employee {
    constructor(name,age,salary) {
        this.name= name;
        this.age = age;
        this.salary = salary;

    }
    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

const emp = new Employee("Sema",37,15000);
// console.log(emp);

emp.showInfos();