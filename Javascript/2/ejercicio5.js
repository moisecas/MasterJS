//mostrar todos los numeros divisores por un numero introducidos por pantalla 

var num = parseInt(prompt("introduce un #",1))
for (var i = 1; i<=num; i++){ //contador, inicializador, compaaración, incrementando 
    if (num%i === 0){ //divisores 
        console.log("divisor: " + i) 
    }
}