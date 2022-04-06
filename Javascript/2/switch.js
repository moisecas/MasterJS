var edad = 41
var print = ""
switch(edad){ //formamos los casos 
    case 18: 
        print = "acabas de cumplir la mayoria de edad"
    break
    case 25: 
    print = "eres adulto"
    break
    case 40: 
    print = "crisis de los 40"
    break
    default: //cuando ya no tengamos mas respuestas para dar cerramos con el default
    print= "edad intermedia"
    break

} 
console.log(print) //mostramos por consola la variable por donde estamos mostrando el resultado de acuerdo a la edad, para este ejemplo 

