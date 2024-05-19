//validación
let form=document.querySelector("#form")
let nombre= document.querySelector("#nombre")
let apellido=document.querySelector("#apellido")
let dni=document.querySelector("#dni")
let contraseña=document.querySelector("#contraseña")


form.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    let erroresVal=false    
    //valido y limpio si hay espacios en las puntas
    if (nombre.value.trim().length < 3) {
        const error=document.querySelector(".error");
        error.textContent="El nombre debe tener mas de 3 caracteres"

    }
    if (apellido.value.trim().length < 3) {
        const error1=document.querySelector(".error1");
        error1.textContent="El apellido debe tener mas de 3 caracteres"
    }

    if (dni.value.trim().length < 8) {
        const error2=document.querySelector(".error2");
        error2.textContent="El DNI debe contener 8 números"
    }

    if (contraseña.value.trim().length < 4) {
        const error3=document.querySelector(".error3");
        error3.textContent="La contraseña debe tenes como minimo 4 caracteres"
    }
    
}

)

