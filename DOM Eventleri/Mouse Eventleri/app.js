const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");


// click eventi
// title.addEventListener("click", run);

// double click eventi
// title.addEventListener("dbclick", run);


//mouse down - o elementin üzerine tıkladığın zaman
// title.addEventListener("mousedown", run);

//mouse up - elini mousedan çektiğin zaman
// title.addEventListener("mouseup", run);

//mouseover - o elementin üzerine geldiğin zaman, tıklamana gerek yok
// title.addEventListener("mouseover", run);


//mouse out - o elementin üzerinden çıktığın zaman
// title.addEventListener("mouseout", run);


// cardBody.addEventListener("mouseover", run);



// mouse enter ve mouse leave

// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);

function run(e) {
    console.log(e.type);
}