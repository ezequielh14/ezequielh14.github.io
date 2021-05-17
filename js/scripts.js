let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
const name = document.getElementById("name");
const email = document.getElementById("e_mail");
const asunto = document.getElementById("asunto");
const msj = document.getElementById("msj");
const form = document.getElementById("formu");

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador == 0){
        enlaces.className = ("enlaces dos");
        contador = 1;
    }else{
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno");
        contador = 0;    
    }
});

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(e){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    },800);
});

window.addEventListener("click", function(e){
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        },800);  
    }
});


form.addEventListener("submit", function(e){
    let entrar = false;
    let warnings = "";
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name.value.length < 3){
        warnings += '* El nombre o razon social es muy corto!\n\n';
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += '* El correo electronico no es valido!\n\n';
        entrar = true;
    }
    if(asunto.value.length < 6){
        warnings += '* El asunto es muy corto!\n\n';
        entrar = true;
    }
    if(msj.value.length < 10){
        warnings += '* El mensaje es muy corto!\n\n';
        entrar = true;
    }

    if(entrar){
       alert(warnings); 
       e.preventDefault();
    }
});
