let value ; 

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Python, C++";


value = firstName + lastName;
value = firstName +" " +lastName;

value = "Mustafa Murat ";
// value = value + "Coşkun"; daha kısası;
value += "Coşkun";

value = firstName + " " + lastName;

value= "Sema Özmen ";
value += "İnal";

value = firstName.length;
value = firstName.concat(" ", lastName," ","Caz")
value = firstName.toLocaleLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];


value = firstName[firstName.length-1];

//index of

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("l"); // küçük olduğu için isimde yok o yüzden -1 değeri alır.

// char at

value = firstName.charAt(0);
value = firstName.charAt(firstName.length-1);

//split

value = langs.split(",");


//replace

value = langs.replace("Python", "Css");

// Includes

value = langs.includes("Java");
value = langs.includes("ajhdk");

console.log(value);


