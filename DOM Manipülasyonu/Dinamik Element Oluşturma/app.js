// yeni element oluşturma
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>



const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// // text content - güvenli değil
// newLink.textContent = "Farklı sayfaya git";

// // text node
// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// // console.log(cardbody);


newLink.appendChild(document.createTextNode("Farklı sayfaya git"));

cardbody.appendChild(newLink);


console.log(newLink);
