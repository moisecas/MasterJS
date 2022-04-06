//condicional if, instrucción que me permiten comparar 

var edad1 = 30;
var edad2=12; 

if (edad1 > edad2){ //en los parentesis va la condicion que va a tener
//contenido del codigo
    console.log("edad 1 es mayor que edad 2") 

}else { //si no, hazme esto 
    console.log("la edad 1 es inferior")
}

//operadores relacionales 
var edad = 18
var nombre = "moises"

if (edad >=18){
    console.log(nombre + "tiene" + edad + "años, es mayor de edad")

    if (edad <=33){
        console.log('todavía eres milenial')
    }else if (edad >= 70){
        console.log('eres anciano')
    }else {
        console.log('ya no eres milenial')
    }
}else {
    console.log(nombre + "tiene" +edad+ "años, es menor de edad")
}

//operadores logicos 
/*
and(y) &&
OR(O) ||
NEGACIÓN: !
*/
var year = 201; 
if (year != 2016){
    console.log("el año no es 2016")
}
//and 
if (year <= 2000 && year <= 2020 && year != 2018){ //si estas condiciones se cumple, haga
    console.log("estamos en la era actual")

}else {
    console.log("era posmoderna")
}

//or
if (year == 2008 || year == 2018){
    console.log("el año acaba en 8")
} else {
    console.log("año no registrado") 
}

//switch, estructura de control 
