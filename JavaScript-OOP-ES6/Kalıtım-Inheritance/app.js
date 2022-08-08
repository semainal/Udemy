class Person { // superclass, base class
    constructor(name,age){
        this.name = name;
        this.age=age;
    }

    showInfos(){ // overriding
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
    toString() { // overriding
        console.log("Employee");
    }

    raiseSalary(amount) { // ekstra
        this.salary += amount;
    }
}

class Employee extends Person { // derived calss, subclass, child class
    constructor(name,age,salary){
        // this.name =name;
        // this.age = age;
        
        super(name,age);
        // super.showInfos();
        this.salary = salary;

    }

    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

const emp = new Employee("Sema", 37,15000);
emp.raiseSalary(5000);
// console.log(emp);

emp.showInfos();
emp.toString();