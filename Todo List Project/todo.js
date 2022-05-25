// tüm elementleri seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton =document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);


}


function clearAllTodos(e) {
    // arayüzden todoları temizleme
    if(confirm("Tümünü silmek istediğinize emin misiniz?")) {
        // todoList.innerHTML = ""; // yavaş

        while(todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}


function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems  =document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue)=== -1){
            //bulamadı

            listItem.setAttribute("style", "display : none !important")
        } else {
            listItem.setAttribute("style","display: block");
        }
    })

}

function deleteTodo(e) {
    
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deletetToDoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","To Do Başarıyla Silindi..")
    } 
}


function deletetToDoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index) {
        if (todo === deleteTodo) {
            todos.splice(index,1); // arrayden değeri silebiliriz.
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodoToUI(todo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Lütfen Bir To Do Girin!!");
    } else {
        addTodoToUI(newTodo);
        addToDoStorage(newTodo);
        showAlert("success","To Do Başarıyla Eklendi.")
    }
  

    e.preventDefault();
}

function getTodosFromStorage() { // storagedan todoları alma
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}


function addToDoStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
    
}


function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    
    setTimeout(function(){ //alert 1 saniye gözüküp kayboluyor.
        alert.remove();
        },2000);
        
}

function addTodoToUI(newTodo) { // yukardaki fonksiyondan aldığı değerini
    // list item olarak ekleyecek

    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li> 
                        */

    // LIST ITEM OLUŞTURMA
    const listItem = document.createElement("li");

    // LINK OLUŞTURMA
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    //TEXT NODE EKLEME
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //TODO LIST'E LIST ITEM I EKLEME
    todoList.appendChild(listItem);

    todoInput.value = "";
}
