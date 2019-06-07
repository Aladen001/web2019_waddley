var Año = 2329;
console.log(Año);
document.write(`<p> estamos en el año <u> ${2329}</u> </p>`)
var titulo1 = document.querySelector("h1");
console.log(titulo1);

// Registrar el evento al elemento
titulo1.addEventListener("click", function() {
    open("https://www.google.com")
});

/* Selecccionar el elemento*/
var parrafoMostrar = document.querySelector("p#mostrar");
var divContenido = document.querySelector("#contenido");

// Registrar el evento al elemento
parrafoMostrar.addEventListener("click", function () {
    divContenido.style.display =prompt("Digite tu nombre anfoire");
    divContenido.style.displa = "none";
    divContenido.style.displa = console.log("waddley");
    divContenido.style.displa = prompt("se oculte mufcka");
    divContenido.style.displa = console.log("wawawa");
    var nombre = prompt("tu nombre");
    document.write(`<p>${nombre}</p>`)
});
