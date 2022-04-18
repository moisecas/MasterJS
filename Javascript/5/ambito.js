//ambito de variables 


function holaTodos (texto){
    var saludo = "soy una variable dentro de la función"
    console.log(texto)
    console.loog(num.toString()) //podría llamar una varaible global dentro de esta función, pero? 
    console.log(saludo)
    //.toString convierte int a string, num a tipo de dato string
}

var texto = "hola, bien?, soy una varaible global"
var num = 12 

holaTodos(texto) 
console.log(saludo) //me da error, la variable no esta definida en el ambito global, solo adentro de la función 