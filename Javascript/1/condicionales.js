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