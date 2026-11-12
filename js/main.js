const anioActual = 2026;
let continuarSimulador = true;

while (continuarSimulador === true) {
    let nombreUsuario = prompt("Ingresá un nombre para calcular su edad (o escribí 'ESC' para salir):");

    if (nombreUsuario === null || nombreUsuario.toUpperCase() === "ESC") {
        continuarSimulador = false;
        break;
    }

    if (nombreUsuario.trim() === "" || !isNaN(nombreUsuario)) {
        alert("Error: El nombre solo puede contener letras y no puede estar vacío.");
        continue;
    }

    let diaNacimiento = parseInt(prompt("Ingresá el día de nacimiento de " + nombreUsuario + " (1-31):"));
    if (isNaN(diaNacimiento) || diaNacimiento < 1 || diaNacimiento > 31) {
        alert("Error: Tenés que ingresar un número válido entre 1 y 31 para el día.");
        continue;
    }

    let mesNacimiento = parseInt(prompt("Ingresá el mes de nacimiento (1-12):"));
    if (isNaN(mesNacimiento) || mesNacimiento < 1 || mesNacimiento > 12) {
        alert("Error: Tenés que ingresar un número válido entre 1 y 12 para el mes.");
        continue;
    }

    let anioNacimiento = parseInt(prompt("Ingresá el año de nacimiento (ej. 1983):"));
    if (isNaN(anioNacimiento) || anioNacimiento > anioActual || anioNacimiento < 1900) {
        alert("Error: Tenés que ingresar un año válido en números (entre 1900 y " + anioActual + ").");
        continue;
    }

    let edadCalculada = anioActual - anioNacimiento;

    alert("Hola " + nombreUsuario + ", naciste el " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento + ".\nTenés o vas a cumplir " + edadCalculada + " años.");
    console.log("Usuario: " + nombreUsuario + " | Fecha: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento + " | Edad: " + edadCalculada);
}

alert("Gracias por usar el Simulador de Edades. ¡Nos vemos!");
console.log("Simulador finalizado correctamente.");