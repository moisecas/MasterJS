//constantes, contenedor de datos que no será modificable

var web = "url.com"
const ip = "192.168.0.12" //no se puede cambiar

web = "url.es" //acá cambio su valor
console.log(web, ip) //el resultado con variables var será distinto, por eso es mejor usar const 

