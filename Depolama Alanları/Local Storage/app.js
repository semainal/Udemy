// local storage

// setItem

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);


//getItem

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// clear local storage

// localStorage.clear();

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("hareket") === null) {
//     console.log("Sorguladığınız veri bulunmuyor.")
// } else {
//     console.log("Sorguladığınız veri bulunuyor.")
// }


// local storage - array yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// //1. YAZIM
// localStorage.setItem("todos", JSON.stringify(todos)); // arraymiş gibi döner.

// // 2.YAZIM
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;
    if( localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));






    e.preventDefault();
}