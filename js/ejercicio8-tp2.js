/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/


/*for(let indice = 0; indice <= 50; indice++){
    for(let repeticiones= 1; repeticiones <= indice; repeticiones++){
        document.write(repeticiones);
    }    
    document.write('<br>');
}*/

//para el caso de introducir un numero indicado por el usuario

let numero = prompt("Introduce un numero de repeticiones: ");
if(numero > 0 && numero <=50){
    for(let indice = 0; indice <= numero; indice++){
        for(let repeticiones=1; repeticiones <= indice; repeticiones++){
            document.write(repeticiones);
        }
        document.write('<br>');
    }
}else{
    alert("El número introducido no es válido")
}

