// Definimos el año actual como una constante
const ANIO_ACTUAL = 2026;

// Iniciamos pidiendo el primer nombre para evaluar la condición del bucle
let nombreUsuario = prompt("Ingresá un nombre para calcular su edad (o escribí 'ESC' para salir):");

// BUCLE WHILE: Se repetirá mientras el usuario no escriba "ESC" y no ponga cancelar
while (nombreUsuario !== "ESC" && nombreUsuario !== null) {
    
    // Solicitamos los datos numéricos y los convertimos con parseInt()
    let diaNacimiento = parseInt(prompt("Ingresá el día de nacimiento (ej. 15):"));
    let mesNacimiento = parseInt(prompt("Ingresá el mes de nacimiento (ej. 8):"));
    let anioNacimiento = parseInt(prompt("Ingresá el año de nacimiento (ej. 1983):"));

    // CONDICIONAL (IF/ELSE IF/ELSE) DENTRO DEL BUCLE:
    // Primero, validamos que los datos ingresados tengan sentido
    
    if (isNaN(diaNacimiento) || isNaN(mesNacimiento) || isNaN(anioNacimiento)) {
        // Regla 1: Si alguno de los datos NO es un número (isNaN)
        alert("Error: Por favor, ingresá números válidos para las fechas.");
    } 
    else if (anioNacimiento > ANIO_ACTUAL) {
        // Regla 2: Si el año ingresado está en el futuro
        alert("Error: El año de nacimiento no puede ser mayor al año actual.");
    } 
    else {
        // Si todo está bien, hacemos la lógica secuencial (tu código original)
        let edadCalculada = ANIO_ACTUAL - anioNacimiento;
        
        let mensajeFinal = "Hola " + nombreUsuario + ", naciste el " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento + ".\n" +
        "Este año cumplís o ya cumpliste " + edadCalculada + " años.";

        // Salida de resultados
        alert(mensajeFinal);
        
        // Reporte en consola
        console.log("--- Resumen Procesado ---");
        console.log("Usuario:", nombreUsuario);
        console.log("Fecha:", diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento);
        console.log("Edad calculada:", edadCalculada);
    }

    // Volvemos a pedir un nombre al final del bucle. 
    // Si el usuario escribe 'ESC', el bucle while terminará.
    nombreUsuario = prompt("Ingresá OTRO nombre para calcular (o escribí 'ESC' para salir del simulador):");
}

// Salida final al terminar el bucle
alert("Gracias por usar el Simulador de Edades. ¡Nos vemos!");
console.log("Simulador finalizado por el usuario.");