var names = prompt("ingresa nombre")
var lastname = prompt("ingresa apellido")

//var text = "nombre es :" + names + lastname 

//usando plantillas 
var text =  `
    <h1>Hola</h1>
    <h3>nombre es: ${names}</h3>
    <h3>apellido es: ${lastname}</h3>
    `

document.write(text) //es necesario en un index.html vincular este js para ver lo que hace, pida los datos y los muestre. 




    