// klavye eventleri
// sadece harf ve sayı gözükür

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    header.textContent = e.target.value;
    // console.log(e.target.value); // placeholder içindeki alır. form doldururken!!
}


// keypress
// document.addEventListener("keypress", run);

// function run(e) {
//     console.log(e.which); // ascii tablosundaki karşılığını verir.
//     console.log(e.key); // gerçek karşılığını verir. hangi tuşa bastıysam o yazar.
//     console.log("Naber");
// }


//key down
// klavyedeki tüm tuşlar ekranda yazar. hepsini algılar.
// document.addEventListener("keydown", run);

// function run(e) {
//     console.log(e.key);
// }

// key up
// basmaya devam ettiğim sürece bastığım tuş gözükmez.
// basmayı bıraktığım an gözükür. tuşu tutar.
// document.addEventListener("keyup", run);

// function run(e) {
//     console.log(e.key);
// }
