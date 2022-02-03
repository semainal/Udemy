let value;

const programmer = {
    name : "Sema İnal",
    age : 37,
    email : "semainal35@gmail.com",
    langs : ["Python","Java","Javascript"],
    address : {
        city: "İstanbul",
        street:"Bahçeşehir"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }

}

value = programmer;

value = programmer.email; // genelde kullanılan
value = programmer["email"] ;

value = programmer.langs;
value = programmer.address.city;

value = programmer.work();

const programmers = [
    {name: "Sema İnal", age:37},
    {name:"Tolga İnal", age:37}
];

value = programmers[0];
value = programmers[0].name;


console.log(value);