/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….*/

for(let indice = 1; indice <= 30; indice++){
    for(let repeticiones= 0; repeticiones <indice; repeticiones++){
        document.write(indice);
    }    
    document.write('<br>');
} 
