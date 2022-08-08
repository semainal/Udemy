function Employee(name,age) {
    this.name = name;
    this.age = age;
    
}

Employee.prototype.showInfos =function() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}

const emp1 = new Employee("Sema",37);
const emp2 = new Employee("Melis", 7);


emp2.showInfos();
console.log(emp1);
console.log(emp2);

