//parametros rest y spread 

function listadoFrutas(fruta1,fruta2){
    console.log("fruta 1: ", fruta1)
    console.log("fruta 1: ", fruta2)
}
listadoFrutas("manzana", "peras") //invocar función 

//pero que pasa si quiero pasarle mas parametros de los permitidos?
//rest 
function listadoFrutas2(fruta1,fruta2, ...todas_frutas){ //usamos ...
    console.log("fruta 1: ", fruta1)
    console.log("fruta 1: ", fruta2)
    console.log(todas_frutas) //mete todos los valores en un array 
}
listadoFrutas2("manzana", "peras", "naranajas", "melones")

//tambien podemos mostrarlo en un array 
var frutas = ["naranaja","peras"] //haciendo un spread de parametros, usamos los ...
listadoFrutas2(...frutas, "manzana", "peras", "naranajas", "melones")
