const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const toggle = document.getElementById("togglePassword")
const formulario = document.getElementById("miFormulario")

const mensajeUsuario = document.getElementById("mensajeUsuario")
const mensajePassword = document.getElementById("mensajePassword")
const fortaleza = document.getElementById("fortaleza")
const contador = document.getElementById("contador")
const mensajeIntentos = document.getElementById("mensajeIntentos")

let intentos = 3
let bloqueado = false



// FUNCIÓN GENERAL
function setEstado(input, mensajeElemento, mensaje, tipo){
    mensajeElemento.textContent = mensaje
    mensajeElemento.className = tipo === "ok" ? "text-success" : "text-danger"
    input.classList.toggle("is-valid", tipo === "ok")
    input.classList.toggle("is-invalid", tipo !== "ok")
}



// VALIDACIÓN USUARIO
usuario.addEventListener("input", function(){
    this.value = this.value.toLowerCase().replace(/[^a-z0-9.-]/g,"")

    if(this.value.length < 3){
        setEstado(this, mensajeUsuario, "Mínimo 3 caracteres", "error")
    } else {
        setEstado(this, mensajeUsuario, "Usuario válido", "ok")
    }
})



// MOSTRAR / OCULTAR PASSWORD
toggle.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password"
    toggle.textContent = password.type === "password" ? "Mostrar" : "Ocultar"
})



// VALIDACIÓN PASSWORD
password.addEventListener("input", function(){

    const valor = this.value
    contador.textContent = valor.length

    const fuerte =
        valor.length >= 10 &&
        /[A-Z]/.test(valor) &&
        /[0-9]/.test(valor) &&
        /[!@#$%^&*]/.test(valor)

    if(fuerte){
        setEstado(this, mensajePassword, "Contraseña válida", "ok")
        fortaleza.textContent = "FORTALEZA: ALTA"
        fortaleza.style.color = "green"
    } else {
        setEstado(this, mensajePassword, "No cumple requisitos", "error")
        fortaleza.textContent = "FORTALEZA: BAJA"
        fortaleza.style.color = "red"
    }
})



// SUBMIT + INTENTOS
formulario.addEventListener("submit", function(e){

    e.preventDefault()
    if(bloqueado) return

    const usuarioValido = usuario.classList.contains("is-valid")
    const passwordValido = password.classList.contains("is-valid")

    if(usuarioValido && passwordValido){

        mensajeIntentos.textContent = "Login exitoso"
        mensajeIntentos.className = "text-success"
        intentos = 3

    } else {

        intentos--

        if(intentos > 0){
            mensajeIntentos.textContent =
                `Datos incorrectos. Intentos restantes: ${intentos}`
            mensajeIntentos.className = "text-danger"
        } else {
            bloquear()
        }
    }
})



// BLOQUEO 30 SEGUNDOS
function bloquear(){

    bloqueado = true
    usuario.disabled = true
    password.disabled = true

    mensajeIntentos.textContent = "Bloqueado por 30 segundos"
    mensajeIntentos.className = "text-danger"

    setTimeout(()=>{
        bloqueado = false
        intentos = 3
        usuario.disabled = false
        password.disabled = false
        mensajeIntentos.textContent = ""
    },30000)
}
