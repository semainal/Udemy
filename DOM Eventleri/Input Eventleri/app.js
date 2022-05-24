const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded", load); // sayfadaki herşey yüklendikten sonra oluşacak

// function load(e) {
//     console.log("Sayfa yüklendi");
// }


// focus

// filter.addEventListener("focus",run);

// //blur
// filter.addEventListener("blur",run);


// paste - başka yerden koplaya yapıştır yaptığın zaman gelir.

// filter.addEventListener("paste", run);

// copy- placeholderdaki yazı kopyalandığı zaman gelir.

// filter.addEventListener("copy", run);

//cut

// filter.addEventListener("cut", run);

// select - placeholderdaki yazıyı seçtiğin zaman çalışır.

filter.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}
