let campoUsuario = document.getElementById("usuario")
let campoPassword = document.getElementById("password")
const mostrarMensaje = document.getElementById("mensaje")
function registro(){


    if(campoPassword.value == "" || campoUsuario.value == ""){
        alert("Error!")
    }else{

        BorrarMensaje()

        const usuario = campoUsuario.value
        const mensaje = document.createElement("p")
    
        mensaje.innerText = "Te has registrado correctamente! Usuario: " + usuario
        
    
        mostrarMensaje.append(mensaje) 

        BorrarCampos()

    }
} 
function login(){
    if(campoPassword.value == "" || campoUsuario.value == ""){
        alert("Error!")
    }else{

    BorrarMensaje()

    const usuario = campoUsuario.value
    const mensaje = document.createElement("p")

    mensaje.innerText = "Login correcto! Usuario: " + usuario
    

    mostrarMensaje.append(mensaje)
    BorrarCampos()

}
}

function BorrarMensaje(){

    mensaje.innerText = ""

}

function BorrarCampos(){

    campoPassword.value = ""
    campoUsuario.value = ""

}