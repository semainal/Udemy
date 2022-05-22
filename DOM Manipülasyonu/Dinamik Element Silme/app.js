// dinamik element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


// remove metodu
// todos[0].remove();

// remove child

// todoList.removeChild(todoList.lastElementChild);

todoList.removeChild(todos[2]);


console.log(todos);
console.log(todoList);