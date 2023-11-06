//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.



do{
    let numero = parseInt(prompt("Introduce un número: "));
    let suma= 0;
    if(Number(numero) == numero){
        numero= Number(numero);
        suma= suma + numero;
        
    }else{
        if(numero != undefined){
            alert("No es un número")
        }
    }
    
}while(confirm("Desea continuar?")){
    
}
document.write(suma);

//duda: no me muestra la suma. 

