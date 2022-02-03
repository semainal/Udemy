const name = "Sema İnal";
const department = "Bilişim";
const salary = "12000";

// const a = "isim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;



//template literal

// const a = `İsim :${name}\nDepartman :${department}\nMaaş :${salary}`;

// const html = "<ul>" + 
//              "<li>" + name + "</li>" +
//              "<li>" + department +"</li>" +
//              "<li>" + salary + "</li>" +
//              "<ul>";

function a(){
    return "Merhaba";
}
const html = `
            <ul>
            <li>${name} </li>
            <li>${department} </li>
            <li>${salary} </li>
            <li> ${10/4} </li>
            <li> ${a()} </li>
            </ul>
`

document.body.innerHTML = html;
