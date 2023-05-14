const inputFechaNacimiento = document.getElementById('fechaNacimiento');
const inputFechaIngreso = document.getElementById('fechaIngreso') ;
const buttonFechaNacimiento = document.getElementById('buttonFechaNacimiento');

function validarFecha(fecha) {
    return !isNaN(Date.parse(fecha));
}

function calcularEdad() {
    let nacimiento = inputFechaNacimiento.value;
    if (validarFecha(nacimiento)) {
        // fecha actual
        const ahora = new Date();
        const ahora_anio = ahora.getFullYear();
        const ahora_mes = ahora.getMonth();
        const ahora_dia = ahora.getDate();

        //fecha de nacimiento
        const nacimiento_fecha = new Date(nacimiento);
        const nacimiento_anio = nacimiento_fecha.getFullYear();
        const nacimiento_mes = nacimiento_fecha.getMonth();
        const nacimiento_dia = nacimiento_fecha.getDate();

        let edad = ahora_anio - nacimiento_anio;
        if (ahora_mes < nacimiento_mes) {
            edad--;
        }
        if (ahora_mes == nacimiento_mes && ahora_dia < nacimiento_dia) {
            edad--;
        } 
        
    }
}

buttonFechaNacimiento.addEventListener('click' , function(e) {
    e.preventDefault();
    calcularEdad();
    
})