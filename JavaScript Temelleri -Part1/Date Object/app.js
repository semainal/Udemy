let value;

const now = new Date(); // şu an ki zaman
// console.log(now);

const date1 = new Date("04-01-1985 17:50:00");

const date2 = new Date("April 01 1985");

const date3 = new Date("04/01/1985");

value = date1;
value = date1.getMonth();
value = date1.getFullYear();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();


// değerleri değiştirme
date1.setMonth(2);
date1.setDate(15);
date1.setFullYear(1984);
date1.setHours(13);
date1.setMinutes(50);
date1.setSeconds(30);

value = date1;

console.log(value);