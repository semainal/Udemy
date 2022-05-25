// session storage da sekmeyi kapanttığın an hepsi silinir.
// local storage da oturumu kapatsan bile silinmez, senin müdahalenle silinir.

// key- value değerleri
// sebze- domates gibi

// session storage - key ve value

// butonları seçme

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);

}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e) {
    sessionStorage.clear();
}






