//el alcance que tienen las variables

//var 
var numero = 40
if(true){
    var numero = 50; //cambio el valor
    console.log(numero)
}
console.log(numero)

//let
let texto = "curso"
console.log(texto)
if  (true){
    let texto = "otro curso"//una varaible local dentro de esta expresión, alcance limitado dentro de la expresión 
    console.log(texto); 
}
console.log(texto) //pero a nivel global sigue siendo el mismo