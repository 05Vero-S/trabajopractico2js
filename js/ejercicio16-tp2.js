//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const cadena = prompt("Ingrese una cadena de texto: ");
let caracter;
let resultado = "";
for(i=0; i < cadena.length; i++){
    caracter= cadena.charAt(i);
    resultado= caracter + resultado;
    document.write(resultado);
    document.write('<br>');

}
