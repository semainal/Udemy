const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI Objesini Başlatma

const ui = new UI();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;


    if (title === "" || director === "" || url==="") {
        //HATA
    } else {
        //yeni film
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); // arayüze film ekleme


    }

    ui.clearInputs(titleElement, urlElement,directorElement);

    e.preventDefault();
}