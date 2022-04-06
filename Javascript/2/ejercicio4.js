//mostrar todos los numeros impares que hay entre los introducidos por el usuario 

var num1= parseInt(prompt("numeros porfa",0))
var num2= parseInt(prompt("numeros porfa",0))

while(num1 < num2){
    num1 ++ 
    if(num1%2 !=0){
        document.write("el " + num1  + "es impar")

    } 
}

