let value;

//veri tiplerini string'e çevirme

value = 123;
value = String(123);
value = String(3.14);
value = String(true);
value = String(function() {console.log()});
value = String([,2,3,4]);

value = (10).toString();
value = (3.14).toString();


// veri tiplerini sayılara çevirme

value = Number("123");
value = Number(null);
value = Number(undefined);
// value = Number("Hello Wordl");
// value = Number(function() {console.log()});
// value = Number = ([1,2,3,4]);

value = Number("3.14");
value = parseFloat("3.14");

value = parseInt("3");


//otomatik değiştirme

// const a = "Hello" + 34;  => Hello 34
// const a = ("34") + 53; => 3453
const a = Number("34") + 53; //=> 87

console.log(a);
console.log(typeof a);



console.log(value);
console.log(typeof value);

