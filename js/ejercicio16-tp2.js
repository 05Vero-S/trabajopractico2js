//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const cadena = prompt("Ingrese una cadena de texto: ");

let resultado = "";
for(i=0; i < cadena.length; i++){
    resultado= cadena.charAt(i) + resultado;
    document.write(resultado);
    document.write('<br>');

}

//resolver que me muestre solo el texto al reves una sola vez y sin eliminar letras 