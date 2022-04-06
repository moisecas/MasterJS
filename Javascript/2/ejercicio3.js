//hacer un programa que muestre todos los numeros introducidos por el usuario 

var num1= parseInt(prompt("numeros porfa"))
var num2= parseInt(prompt("numeros porfa"))

document.write(""+num1+""+num2) 
for(var i = num1; i<=num2; i++){
    document.write(i+"<br/>") 
}