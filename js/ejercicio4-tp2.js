//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.



let numero = parseInt(prompt("Introduce un número: "));
let suma= 0;
do{
    if(Number(numero) == numero){
        numero= Number(numero);
        suma= suma + numero;
    }else{
        if(numero != undefined){
            alert("No es un número")
        }
    }

}while(numero != undefined);
    
document.write(suma);

