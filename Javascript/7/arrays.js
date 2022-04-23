//arrays o arrreglos o matrices (coleccion de datos agrupados) 

var nombres = ["moises","maria", "violeta", 52, true] //coleccion de varoles

//array en forma de objeto

var lenguajes = new Array("Go", "js", "python", "java")
//cada uno de estos elementos esta guardado en un indice, la posición inicial es 0

console.log(nombres, lenguajes) 
//acceder a una posición especifica
console.log(nombres[0]) //muestra la posición 0 del array

//ver la longitud de un array
console.log(nombres.length)

//para capturar el dato se requiere que lleves este script a un index.html con la etiqueda script dentro del body
var elemento = parseInt( prompt("que elemento del array quieres",0))
if(elemento>=nombres.length){ //preguntamos si elemento es mayor o igual a la cantidad de elementos del array
    alert("introduce el numero correcto, menor que: " + nombres.length) //si es así, le decimos que debe introducir un numero de acuerdo a la cantidad de elementos del array
}else{ //si no es así, mosrtamos el resultado 
    alert("el usuario escogido es: " + nombres[elemento])
}
alert(nombres[elemento]) //indice del array que queremos mostrar

//recorrer un array y mostrar por pantalla

document.write("<h1>Lenguajes para aprender en 2022<h1/>")
//una forma de hacerlo es escribiendo uno a uno, pero?
document.write("Aprende: " + lenguajes[0])

//hay otra manera
document.write("<ul>") 
for(var i = 0; i<lenguajes.length; i++){ //va iterando, recorreiendo mientras sea menor a la longitud del array
    document.write("<li>"+lenguajes[i]+"<li/>")
}
document.write("</ul>"); 

//metodo for each, usando callback y función de flecha

lenguajes.forEach((elemento)=>{
    
    document.write("<li>"+ elemento+"</li>")
})
document.write("</ul>") 

//puedo mostrar su indice en pantalla
lenguajes.forEach((elemento, indice)=>{
    
    document.write("<li>" + "Posición "+  indice + " " + elemento+  "</li>")  
})
document.write("</ul>") 
