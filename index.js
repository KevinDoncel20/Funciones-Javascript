/* funciones declaradas*/
{
    function calculaPropina(totalCuenta,PorcentajePropina){
        let propina = totalCuenta*PorcentajePropina/100
        return propina
    }
    let TotalFactura = 100000
    let PorcentajePropina= 10
    let propina = calculaPropina(TotalFactura, PorcentajePropina)
    console.log(`Para una cuenta de ${TotalFactura}COP y propina de ${PorcentajePropina}%, 
    la propina a pagar es de $${propina}COP`)

}
/* funciones expresadas*/
{
    let calculaPropina = function(totalCuenta,PorcentajePropina){
        let propina = totalCuenta*PorcentajePropina/100
        return propina
    }
    function calculartotal(totalCuenta, variablepropina){
        return totalCuenta + variablepropina
    }
    let TotalFactura = 100000
    let PorcentajePropina= 30
    let total = calculartotal(TotalFactura, calculaPropina(TotalFactura, PorcentajePropina))
    console.log(`el total es ${total}`)
}



/* funciones declarada*/

{
    function calculaPropina(totalCuenta,PorcentajePropina){
        let propina = totalCuenta*PorcentajePropina/100
        return propina
    }
    function calculartotal(totalCuenta){
        return totalCuenta + calculaPropina(totalCuenta, PorcentajePropina)
    }
    let TotalFactura = 100000
    let PorcentajePropina= 10
    let total = calculartotal(TotalFactura, PorcentajePropina)
    console.log(`el total es ${total}`)
}
/* funciones flecha*/

const saludar= function (){
    console.log("hola este es un saludo")
}

const despedir = (nombre) => {console.log(`esta es de una despedida para ${nombre}`)}

saludar()
despedir("David")

const sumar = (a,b) => a+b
const promedio = (a,b) => (a+b)/2
console.log(sumar(3,3))
console.log(promedio(3,3))


