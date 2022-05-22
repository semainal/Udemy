let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-grouo-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value= todoList;
value= todo;
value = cardrow;


// child nodes -text dahil alıyor

value = todoList.childNodes;
value = todoList.childNodes[0];

// children - element

value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length - 1] // son çocuk
value = todoList.children[2].textContent ="değişti"; // todo 3 değişti


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent="Burası da değişti.";


value = todoList;
value = todoList.firstElementChild; // value= todoList.children[0] demek
value = todoList.lastElementChild;

value = todoList.childElementCount; // value = todoList.children.length - kaç tane çocuğu var


value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;


// element kardeşleri

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;



console.log(value);