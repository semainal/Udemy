// event bubbling - clicklediğim zaman parentlarda etkileniyor.

// document.querySelector(".container").addEventListener("click", function(){
//     console.log("Div Container");
// })

// document.querySelector(".card.row").addEventListener("click", function(){
//     console.log("Card Row");
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
//     console.log("Card Body");
// })

// event capturing veya delegation ***
// önemli - tek bir fonksiyonla todolar üzerinde işlem yapanbiliyorum.
// todo 5 geldiğinde yeni bir silme işlemi eklemem gerekmiyor.

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreleme İşlemi")
    }
    if (e.target.id === "clear-todos") {
        console.log("Tüm taskları temizleme");
    }
    // console.log(e.target); // nereye bastığımı bulabiliyorum.
}