let gastos = []

tipoGasto = document.getElementById("tipoGasto")
monto = document.getElementById("monto")

function guardarGastos(){

    gasto = tipoGasto.value + ":$ " + monto.value
    gastos.push(gasto)
    console.log(gastos) 
    eliminarCampos()

}

function eliminarCampos(){

    monto.value = ""
    tipoGasto.value =  ""

}