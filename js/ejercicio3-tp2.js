//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadenasConcatenadas = ""
let cadena = prompt("Introduce una cadena: ");
do{
    if (cadenasConcatenadas == ""){
        cadenasConcatenadas = cadenasConcatenadas + cadena;
    }else{
        cadenasConcatenadas = cadenasConcatenadas + "-" + cadena;
    }

}while(confirm("¿Continuar?")){
    document.write(cadenasConcatenadas);
}  

//duda:si quiero introducir cadenas distintas?

//El método confirm() muestra un cuadro de diálogo con un mensaje, un botón Aceptar y un botón Cancelar.//El método confirm() devuelve verdadero si el usuario hizo click en "Aceptar", en caso contrario devuelve falso.