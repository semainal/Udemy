const element = document.querySelector("#clear-todos");


// element özellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//style ve element özellikleri değiştirme

// element.className = "btn btn-info";
// element.style.color = "yellow";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";


// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color:green'>Silin </span>";


// const elements = document.querySelectorAll(".list-group-item");
// console.log(elements);

// elements.forEach(function(el) {
//     el.style.color= "red";
//     el.style.backgroundColor = "pink";
// });


// query selectorlar içinden istediğini seçme
// let element2 = document.querySelector("li:first-child");
let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)"); // tek
element2 = document.querySelectorAll("li:nth-child(even)"); // çift


element2.forEach(function(el) {
    el.style.background = "#ccc";
    el.style.color ="red";
});

console.log(element2);


// console.log(element);
