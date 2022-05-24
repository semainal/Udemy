const filterInput = document.getElementById("filter");

// filterInput.onfocus = function() {
//     console.log("Naber");
// }


// filterInput.addEventListener("focus", function(e){

//     console.log(e);
//     console.log.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     // console.log("Naber");
// });


const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(event) {
    console.log("Submit Eventi");

    event.preventDefault(); // normalde sayfa yenileniyor ve submit eventi 
    //anlık görülüp kayboluyordu. ama bu özellikle sayfa yenilenmedi ve submit eventi
    // ekranda gözüktü.
}
