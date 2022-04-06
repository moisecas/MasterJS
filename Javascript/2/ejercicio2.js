//media y la suma de los numeros introducidos por el usuario 
var suma = 0; 
var contador = 0; 

do{
    var numero = parseInt(prompt("digita un numero hasta que introduzcas uno negativo"))
    if (isNaN(numero)){
        numero = 0; 
    }else if(numero>=0){
        suma = suma  + numero
        //suma += numero
        contador ++

    }
    console.log(suma)
    console.log(contador)
}while(numero >= 0)
alert("la suma de todos los numeros es: " + suma)
alert("la media de todos los numeros es: " + (suma/contador)) 