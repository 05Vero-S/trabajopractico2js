/*Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/

for(let indice=1; indice<=500; indice++){
    document.write(indice);
    if(indice % 4 == 0){
        document.write("(Es múltiplo de 4)");
    }
    if(indice % 9 == 0){
        document.write("(Es múltiplo de 9)");
    }
    document.write('<br>');
    if(indice % 5 == 0){
        document.write("<hr>");
    }
}

