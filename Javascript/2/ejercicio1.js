//pida dos numeros, cual es mayor, cual es menor y cuales son iguales

var num1 = prompt("digita un numero por favor")
var num2 = prompt("un segundo numero x fa")

//usamos el while para comprobar antes de ejecutar el ccódigo la calidad de los datos que entran 
while(num1 <=0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1= prompt("digita un numero por favor")
    num2 = prompt("un segundo numero x fa")

}

if(num1 < num2){
    alert("numero 1 es el menor")

}else{
    alert("numero 1 es el mayor")  
}
if(num1 == num2){
    alert("son iguales")

}else{
    alert("no son iguales")  
}

//otra solución  
var num1 = parseInt(prompt("digita un numero por favor", 0))
var num2 = parseInt (prompt("un segundo numero x fa", 0)) 
while(num1 <=0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){ //isNan me ayuda a reconocer si el contenido que llega a la variable no es un #
    num1= prompt("digita un numero por favor")
    num2 = prompt("un segundo numero x fa") 

}
if(num1 == num2){
    alert("son iguales")

}else if (num1>num2){
    alert("el mayor es: " + num1)
    alert("el menor es : " + num2)

}else if (num2>num1){
    alert("el mayor es: " + num2)
    alert("el menor es : " + num1)

}else{
    alert("por favor ingrese numeros") 
}