let campoUsuario = document.getElementById("usuario")
let campoPassword = document.getElementById("password")
const mostrarMensaje = document.getElementById("mensaje")

let usuarios = []
let passwords = []


function registro(){


    if(campoPassword.value == "" || campoUsuario.value == ""){
        alert("Error!")
    }else{

        BorrarMensaje()

        usuarios.push(campoUsuario.value)
        passwords.push(campoPassword.value)


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
    }   else if(usuarios.includes(campoUsuario.value, 0) && passwords.includes(campoPassword.value, 0)){
        BorrarMensaje()

        const usuario = campoUsuario.value
        const mensaje = document.createElement("p")
    
        mensaje.innerText = "Login correcto! Usuario: " + usuario
        
    
        mostrarMensaje.append(mensaje)
        BorrarCampos()
    

    } else
    {
    alert("Error en el usuario o contraseña")
    BorrarMensaje()
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