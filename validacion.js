intentos= 3;

function validarFormulario(){

    var user = document.formulario.username;
    var email = document.formulario.email;
    var passwd = document.formulario.password;

    var userLen = user.value.length;
    if (userLen == 0 || userLen < 8) {
        alert("Debe ingresar un usuario con mínimo 8 caracteres");
    } else {
        
        console.log("Paso prueba de usuario");
    }

    var passwdLen = passwd.value.length;
    if (passwdLen ==0 || passwdLen<8) {
        alert("Ingresar una clave con más de 8 caracteres");
    } else {
        console.log("Paso prueba de la contraseña");
    }

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.value.match(emailFormat)){    
        alert("Debes ingresar un correo válido!");
    }else{
        console.log("Paso prueba del correo");
    }
}