//función que no tiene nombre y puedo guardarlo en una variable 

var pelicula = function(name){
    return "la pelicula es  " + name
}

//callback, función dentro de otra función 

function sumar(n1,n2, sumaYmuestra, sumaPorDos){ //sumaymuestra y sumapordos son callbacks
    var suma= n1+n2
   
    //debo invocar esos callback y pasarle los datos 
    sumaYmuestra(suma)
    sumaPorDos(suma) 
    return suma 
}
sumar(1,2, function(dato){ //este callback ya debe recibir un dato a devolver 
    console.log("la suma es : ", dato) 
}, 
function(dato){ //el otro callback, la suma de lo que se haya hecho multiplicado por 2 
    console.log("la suma x dos: ", (dato*2))
}
)

//ahora como una función de flecha o arrow function, reemplazamos la palabra function por la =>

function sumar(n1,n2, sumaYmuestra, sumaPorDos){ //sumaymuestra y sumapordos son callbacks
    var suma= n1+n2
   
    //debo invocar esos callback y pasarle los datos 
    sumaYmuestra(suma)
    sumaPorDos(suma) 
    return suma 
}
sumar(1,2, dato=>{ //este callback ya debe recibir un dato a devolver 
    console.log("la suma es : ", dato) 
}, 
dato=>{ //el otro callback, la suma de lo que se haya hecho multiplicado por 2 
    console.log("la suma x dos: ", (dato*2))
}
)