//calculadora, pida dos numeros por pantalla, valide los numeros, muestre por consola y en un alert el resultado


var num1= parseInt(prompt("numeros porfa"))
var num2= parseInt(prompt("numeros porfa"))

while(num1 < 0 || num2 <0 || isNaN(num1) || isNaN(num2)){
    num1= parseInt(prompt("numeros porfa"))
    num2= parseInt(prompt("numeros porfa"))
}

var resultado = "la suma es: " + (num1+num2) + " <br/>" + "la resta es: " + 
(num1-num2) + " <br/>" + "la multiplicación es: " + (num1*num2) 
+ " <br/>" + "la división es: " + (num1/num2) + " <br/>" //vamos concatenando operación y mensaje 

//para mostrar el mensaje bien por la ventana de la pagina 
var resultadoVentana = "la suma es: " + (num1+num2) + " \n" + "la resta es: " + 
(num1-num2) + " \n" + "la multiplicación es: " + (num1*num2)  
+ " \n" + "la división es: " + (num1/num2) + " \n" //vamos concatenando operación y mensaje 

alert(resultadoVentana) //mostrarlo como una alerta en pantalla
document.write(resultado) //mostrarlo en pantalla escrito 


