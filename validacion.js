let usuario = document.getElementById("usuario")
let mensaje = document.getElementById("mensaje")
 usuario.addEventListener("input",function(evento){
   this.value = this.value.toLowerCase()
   if(/[^a-z]/g.test(this.value)){
      mensaje.textContent ="Esta tratando de ingresar un valor incorrecto"
      this.style.borderColor = "red"
      this.borderColor = "2px solid"
   }
   else if (this.value){
      mensaje.textContent = "usuario correcto"
   }
   else{
      mensaje.textContent ="campo requerido"
       this.style.borderColor = "green"
       this.borderColor = "2px solid"
   }
   this.value = this.value.replace(/[^a-z]/g,"")

 })

 let password = document.getElementById("password")
let mensajePassword = document.getElementById("mensajePassword")

password.addEventListener("input", function(evento){

    if(this.value.length <= 10){
        mensajePassword.textContent = "La contraseña no es válida"
        this.style.borderColor = "red"
        this.style.borderWidth = "2px"
        this.style.borderStyle = "solid"
    }
    else{
        mensajePassword.textContent = "La contraseña es válida"
        this.style.borderColor = "green"
        this.style.borderWidth = "2px"
        this.style.borderStyle = "solid"
    }

})
