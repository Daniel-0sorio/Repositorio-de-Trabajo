function mostrarFormulario(formulario) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("formulario").style.display = "none";

    if (formulario === "login") {
        document.getElementById("loginForm").style.display = "block";
    } else if (formulario === "register") {
        document.getElementById("registerForm").style.display = "block";
    } else if (formulario === "denuncia") {
        document.getElementById("formulario").style.display = "block";
    }
}

function validarCorreo(email) {
    const usmPattern = /^[a-zA-Z0-9._%+-]+@usm\.cl$/;
    return usmPattern.test(email);
}

function validarContrasena(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
}

function validarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!validarCorreo(email)) {
        alert("El correo debe ser del dominio @usm.cl");
        return;
    }

    if (!validarContrasena(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula y un número.");
        return;
    }

    alert("Inicio de sesión exitoso");
    document.getElementById("loginForm").style.display = "none";
}

function validarRegistro(event) {
    event.preventDefault();

    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!validarCorreo(email)) {
        alert("El correo debe ser del dominio @usm.cl");
        return;
    }

    if (!validarContrasena(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula y un número.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    alert("Registro exitoso");
    document.getElementById("registerForm").style.display = "none";
}
