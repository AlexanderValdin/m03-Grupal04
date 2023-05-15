const inputFechaNacimiento = document.getElementById('fechaNacimiento');
const inputFechaIngreso = document.getElementById('fechaIngreso') ;
const buttonFechaNacimiento = document.getElementById('buttonFechaNacimiento');
const buttonFechaIngreso = document. getElementById('buttonFechaIngreso');

const resultFechaNacimiento = document.getElementById('resultFechaNacimiento');
const resultFechaIngreso = document.getElementById('resultFechaIngreso');

const calcularDiaSegunFecha = fecha => {
    ['Domingo',
     'Lunes',
     'Martes',
     'Miércoles',
     'Jueves',
     'Viernes',
     'Sábado'][new Date(fecha).getDay()];
}
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
        
        const nacimiento_diaSemana = calcularDiaSegunFecha(nacimiento_fecha);

        let edad = ahora_anio - nacimiento_anio;
        if (ahora_mes < nacimiento_mes) {
            edad--;
        }
        if (ahora_mes == nacimiento_mes && ahora_dia < nacimiento_dia) {
            edad--;
        } 
        
        let meses = 0;
        if (ahora_mes > nacimiento_mes) {
            meses = ahora_mes - nacimiento_mes;
        }
        if (nacimiento_mes > ahora_mes) {
            meses = 12 - (nacimiento_mes- ahora_mes);
        }
        if (nacimiento_dia > ahora_dia) {
            meses--;
        }

        let dias = 0;
        if (ahora_dia > nacimiento_dia){
            dias = ahora_dia - nacimiento_dia;
        }
        if (ahora_dia < nacimiento_dia) {
            ultimoDiaMes = new Date(ahora_anio, ahora_mes, 0);
            dias = ultimoDiaMes.getDate()- (nacimiento_dia - ahora_dia);
        }
        let milisegundosPorDia = 1000*60*60*24;

        let dias_restantes = 0;
        let cumpleanios_fecha = new Date(ahora_anio, nacimiento_mes, nacimiento_dia);
        if (cumpleanios_fecha < ahora) {
            cumpleanios_fecha.setFullYear(ahora_anio + 1); 
        }
        dias_restantes = Math.floor((cumpleanios_fecha.getTime() - ahora.getTime())/milisegundosPorDia);
        let mensajeDiasRestantes;
        if (dias_restantes==0) {
            mensajeDiasRestantes = 'FELIZ CUMPLEAÑOS!';
        } else {
            mensajeDiasRestantes = `Faltan ${dias_restantes} para tu próximo cumpleaños`;
        }
        return `Usted nació un día ${nacimiento_diaSemana}. <br>
                Su edad es de ${edad} años. <br>
                ${mensajeDiasRestantes} `;
    } else {
        return 'La fecha es inválida';
    }
}


buttonFechaNacimiento.addEventListener('click' , function(e) {
    e.preventDefault();
    resultFechaNacimiento.innerHTML = calcularEdad();
})

function calcularPermanencia(fecha_ingreso, hoy) {
    if (validarFecha(fecha_ingreso) && validarFecha(hoy)) {

    }
}

buttonFechaIngreso.addEventListener('click', function(e) {
    e.preventDefault();
    const fecha_ingreso = new Date(inputFechaIngreso.value);
    resultFechaIngreso.innerHTML = calcularPermanencia(fecha_ingreso, new Date());
})