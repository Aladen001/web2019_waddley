var Nombre = prompt("Digite su nombre");
var Edad = prompt("Digite su edad");
var ciudad = prompt("Digite su ciudad");
var bario = prompt("Digite su bario");
var direccion = prompt("Digite su direccion");

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(bario);
console.log(direccion);

document.write("<h1> nombre </h1>");
document.write("<p> edad </p>");
document.write("<div> ciudad </div>");
document.write("<div> bario </div>");
document.write("<div> direccion </div>");



document.write(`<h1> ${ Nombre} </h1>`);
document.write(`<h1> ${ Edad} </h1>`);
