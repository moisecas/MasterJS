/*
tabla de multiplicar de un introducido por pantalla 
*/
var num = parseInt(prompt("¿de que numero quieres la tabla",1)) //capturamos el # por pantalla 
for(var i=1; i <= 12; i++){
    document.write(i + 'x' + num + ' = ' + (i*num) + "<br/>") //muestro en pantalla la multiplicacion

}
