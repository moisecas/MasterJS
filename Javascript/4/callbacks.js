//funciones dentro de otra función 
function porConsola(num1, num2){ //esta función lleva la logica 
    console.log("suma: " + (num1+num2))
    console.log("resta: " + (num1-num2))
    console.log("multiplicación: " + (num1*num2))
    console.log("división: " + (num1/num2))
}
function porPantalla(num1,num2){
    document.write("suma: " + (num1+num2))
    document.write("resta: " + (num1-num2))
    document.write("multiplicación: " + (num1*num2))
    document.write("división: " + (num1/num2)) 
}


function calculadoraCuatro(num1, num2, mostrar=false){ //() va los parametros que va a recibir para hacer las operaciones, mostrar es un parametro opcional
    if(mostrar = false){ //mientras mostrar sea falso muestre el resultado por consola
        porConsola(num1,num2)//traemos la función con sus parametros 

    }else { //cuando mostrar no sea falso mostrar el resultado en la pagina 
         porPantalla(num1,num2)

    }
    return true;  
}
calculadoraCuatro(5,4)//lo muestra x consola
calculadoraCuatro(6,4, true) //por pasar true en el parametro mostrar va a mostrar los resultados por pantalla 