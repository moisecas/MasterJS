//si deseas probarlo en un navegador recuerda importarlo a un index.html dentro de la etiqueta script
//hacer un programa si el numero es par o impar 
/*
1. ventana prompt
2. si no es valido que pida de nuevo el numero 
*/
var num = parseInt(prompt("escribe un mensaje",0)) //por ahora estamos declarado las variables con var, mas adelante te darás cuenta que es mejor declararlas con let o const
while(isNaN(num)){ //validamos que sea numero
    num = parseInt(prompt("escribe un mensaje",0)) //lo solicitamos las veces que sea necesario hasta que escriba el numero correcto 
}

if (num % 2 == 0){
    alert("es par")

}else {
    alert("es impar")
}