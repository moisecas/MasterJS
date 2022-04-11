//Funciones, variables que se involucran para ejecutar, conjunto de ordenes. Agrupación reutilizable 

function calculadora (){ //se crean con la palabra reservada function seguido del nombre de la función 
    return "soy calculadora" //me va a devolver algo
}
console.log(calculadora()) //debo invocarla, nombrefunción() 

//otra forma 
function calculadora (){ //se crean con la palabra reservada function seguido del nombre de la función 
    //return "soy calculadora" //me va a devolver algo
    console.log("soy la función calculadora")
}
calculadora() //debo invocarla, nombrefunción() puedo invocarla o llamarla las veces que quiera 

//puedo meterla en una variable 
var resultado = calculadora()
console.log(resultado)

//Puede recibir parametros que van a alterar su funcionamiento 
function calculadoraDos(){
    console.log("suma: " + (10+15))
    console.log("resta: " + (10-15))
    console.log("multiplicación: " + (10*15))
    console.log("división: " + (10/15))
}
calculadoraDos()

//pero para que varien podemos: reciba valores como parametro
function calculadoraTres(num1, num2){ //() va los parametros que va a recibir para hacer las operaciones 
    console.log("suma: " + (num1+num2))
    console.log("resta: " + (num1-num2))
    console.log("multiplicación: " + (num1*num2))
    console.log("división: " + (num1/num2))
}
calculadoraTres(8,2) //en los parentesis le paso los numeros como parametro que establecí en la función, num1,num2
calculadoraTres(3,2)
calculadoraTres(5,11) //puedo pasarla n veces, invocarla las veces que quiera 

//Puedo usarla dentro de un ciclo
for (var i = 1; i<=10; i++){ //variable, condición hasta cuando va a pasar, incremento
    console.log(i) //mostramos i en consola para ver en que iteración va
    calculadoraTres(i,8) //invocación de la función con los parametros 
}

//funciones  adentro de ciclos 
function calculadoraCuatro(num1, num2, mostrar=false){ //() va los parametros que va a recibir para hacer las operaciones, mostrar es un parametro opcional
    if(mostrar = false){ //mientras mostrar sea falso muestre el resultado por consola

        console.log("suma: " + (num1+num2))
        console.log("resta: " + (num1-num2))
        console.log("multiplicación: " + (num1*num2))
        console.log("división: " + (num1/num2))
    }else { //cuando mostrar no sea falso mostrar el resultado en la pagina 
        document.write("suma: " + (num1+num2))
        document.write("resta: " + (num1-num2))
        document.write("multiplicación: " + (num1*num2))
        document.write("división: " + (num1/num2)) 
    }

}
calculadoraCuatro(5,4)//lo muestra x consola
calculadoraCuatro(6,4, true) //por pasar true en el parametro mostrar va a mostrar los resultados por pantalla 
 
