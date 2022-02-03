let value;
const numbers =[43,56,33,23,44,35,5];
// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];


//index
value = numbers.length;
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

//herhangi bir index i değiştirme

numbers[2] = 1000;
value = numbers;

// index of

value = numbers.indexOf(1000);

// array in sonuna değer ekleme

numbers.push(2000);
value = numbers;

// array in başına değer ekleme

numbers.unshift(3000);
value = numbers;

// array in sonundan değer atma

numbers.pop();
value = numbers;

//array in başından eleman atma

numbers.shift();
value = numbers;

// belirli bi index e kadar atmak istersem

numbers.splice(0,3);
value = numbers;

// ters çevirme

numbers.reverse();
value = numbers;

// sıralama

numbers.sort(); // ilk rakama bakıyor sıralama 23,33,44,5 oldu
value=numbers;

value = numbers.sort(function(x,y){
    // Küçükten büyüğe sıralama
    return x-y;
})

value = numbers.sort(function(x,y){
    // büyükten küçüğe sıralama
    return y-x;
})


console.log(value);