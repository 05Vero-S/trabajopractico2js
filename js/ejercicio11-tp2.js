//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const edad1 = parseInt(prompt("Ingrese edad 1: "));
const nombre1 = prompt("Ingrese nombre 1: ");
const edad2 = parseInt(prompt("Ingrese edad 2: "));
const nombre2 = prompt("Ingrese nombre 2: ");
const edad3 = parseInt(prompt("Ingrese edad 3: "));
const nombre3 = prompt("Ingrese nombre 3: ");

//Math.max([x[, y[, …]]]) Devuelve el mayor de cero o más números.

let mayor=Math.max(edad1, edad2, edad3);
if(mayor == edad1){
    document.write(`El mayor es: ${nombre1}`);
}
if(mayor == edad2){
    document.write(`El mayor es: ${nombre2}`);
}
if(mayor == edad3){
    document.write(`El mayor es: ${nombre3}`);
}