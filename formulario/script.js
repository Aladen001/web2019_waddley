// selecionar los elementos
var correo = document.querySelector("input#correo");
var contrasena = document.querySelector("input#contrasena");
var div = document.querySelector("div#contenido")
var iniciar

console.log(correo);
console.log(contrasena);


// Agregarle el evento al elemento
correo.addEventListener("keyup", function () {
    div.textcontent = correo.correo.Value;
});

// Agregarle el evento al elemento
correo.addEventListener("blur", function () {
    alert(correo.Value);
});

//Agregarle el evento al boton
