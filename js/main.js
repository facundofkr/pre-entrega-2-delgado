// Constante en camelCase como pidió el tutor
const anioActual = 2026;

// Pedimos el primer dato para evaluar el bucle
let nombreUsuario = prompt("Ingresá un nombre para calcular su edad (o escribí 'ESC' para salir):");

// Bucle while que contiene los condicionales adentro
while (nombreUsuario !== "ESC" && nombreUsuario !== null) {
    
    let diaNacimiento = parseInt(prompt("Ingresá el día de nacimiento (1-31):"));
    let mesNacimiento = parseInt(prompt("Ingresá el mes de nacimiento (1-12):"));
    let anioNacimiento = parseInt(prompt("Ingresá el año de nacimiento (ej. 1983):"));

    // Condicional para validar los datos ingresados
    if (isNaN(diaNacimiento) || isNaN(mesNacimiento) || isNaN(anioNacimiento)) {
        alert("Error: Por favor, ingresá números válidos para las fechas.");
    } else if (anioNacimiento > anioActual) {
        alert("Error: El año de nacimiento no puede ser mayor al año actual.");
    } else {
        let edadCalculada = anioActual - anioNacimiento;

        // Salida directa en el alert sin crear una variable extra
        alert("Hola " + nombreUsuario + ", naciste el " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento + ".\nTenés o vas a cumplir " + edadCalculada + " años.");

        // Un único console.log concatenando todos los datos del registro
        console.log("Usuario: " + nombreUsuario + " | Fecha: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento + " | Edad: " + edadCalculada);
    }

    // Volvemos a preguntar para decidir si sigue el bucle o corta
    nombreUsuario = prompt("Ingresá OTRO nombre para calcular (o escribí 'ESC' para salir):");
}

// Mensaje de cierre al salir del bucle
alert("Gracias por usar el Simulador de Edades. ¡Nos vemos!");
console.log("Simulador finalizado correctamente.");