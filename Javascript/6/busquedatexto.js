var numero = 444; 
var texto1= "texto en esta variable"
var texto2= "otro texto" 

var buscar = texto1.indexOf("texto") //para saber la posición de una palabra en un string, encuentra la primera coincidencia 
console.log(buscar) 

var buscar1 = texto1.substring(1,3) //me encuentra esos caracteres y los muestra
console.log(buscar1)

var buscar1 = texto1.charAt(3) //me selecciona un caracter concreto
console.log(buscar1)

//otros metodos de busqueda, match, lastindexof, search

//reemplazar un texto por otro
var reemplazar = texto1.replace("texto", "moises")//sustituimos texto por moises
console.log(reemplazar) 

var reemplazar = texto1.slice(3)//separar el string a partir del caracter que quiera
console.log(reemplazar) 

var reemplazar = texto1.slice(3,7)//separar el string a partir del caracter que quiera y puedo decirle que ver a partir de la posición
console.log(reemplazar) 

var reemplazar = texto1.split(" ")//palabras separadas en un array 
console.log(reemplazar) 

var reemplazar = texto1.trim()//recortarme o quitar espacios adelante o atrás
console.log(reemplazar) 