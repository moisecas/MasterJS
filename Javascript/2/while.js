//similar al bucle for, es un bucle que es indefinido 

var year = 2022 
while(year <= 2051){ //mientras que pase la condición ejecute este código
    console.log("estamos en el año: " + year)
    year ++ //operador de incremento
}

var year = 2022 
while(year != 1991){ //mientras que pase la condición ejecute este código
    console.log("estamos en el año: " + year)
    year -- //operador de incremento
}

//do whilem, permite evaluar un bloque de instrucciones y evaluar la condición 
var years = 21
do{
    console.log("cuando sea diferente a 20")
    years = 20 

}while(years >25)  