var cosas = ["mesa","tabla", "tabla1"]
var cocina = ["cuchillo", "tenedor", "platos"] 

var objetos = [cosas,cocina]

var agregar = prompt("introduce elementos hasta escribir acabar") //recuerda hacer el script en un html para pedir los datos
do{
    agregar = prompt("introduce elementos hasta escribir acabar")
    cocina.push("cuchara") //ingresar elementos por push 

}
while(agregar != acabar){ //mientras agregar sea diferente que escribir acabar, haga lo siguietnte
    

}

cocina.pop()//saco el último elemento del array, no me interesa que salga la palabra array adentro de mi respuesta
var cocina_String =  cocina.join() //convertir un array a string 
console.log(cocina) 