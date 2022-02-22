// elementi id'ye göre seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//elementi class ismine göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");


// etiket ismşne göre element seçme

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// query selector - css selector
// ilk bulduğu elementi seçiyor - tek element dönüyor

element = document.querySelector("#todo-form"); //id
element = document.querySelector(".list-group-item"); // class

element = document.querySelector("li"); // ilk li
element = document.querySelector("div"); // ilk div

// birden fazla eleman seçmek için
element = document.querySelectorAll("li");

element.forEach(function(el) {
    console.log(el);
})

console.log(element);