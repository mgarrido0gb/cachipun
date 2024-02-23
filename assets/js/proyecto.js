let opcionUsuario = '';

function elegirOpcion(opcion) {
    opcionUsuario = opcion;
    document.getElementById('opcionUsuario').src = `assets/img/${opcion}.png`;
    document.getElementById('mensaje').innerText = `Has escogido ${opcion}`;
}

function iniciarJuego() {
    if (opcionUsuario === '') {
        alert('Por favor, selecciona una opción antes de iniciar el juego.');
        return;
    }

    const opciones = ['piedra', 'papel', 'tijera'];
    const opcionCPU = opciones[Math.floor(Math.random() * 3)];

    document.getElementById('opcpu').src = `assets/img/${opcionCPU}.png`;
    const resultado = obtenerResultado(opcionUsuario, opcionCPU);
    document.getElementById('mensaje').innerText = resultado;

}

let contusuario = 0;
let contcpu = 0;
let contE = 0;


contcpu = parseInt(contusuario)
contusuario = parseInt(contcpu)
contE = parseInt(contE)

function obtenerResultado(opcionUsuario, opcionCPU) {

    if (opcionUsuario === opcionCPU) {
        alert('¡Empate!' + ' '+'CPU ha escogido ' + opcionCPU);
        contE++;
        document.getElementById('contE').innerText = contE;

        
    } else if (
        (opcionUsuario === 'piedra' && opcionCPU === 'tijera') ||
        (opcionUsuario === 'papel' && opcionCPU === 'piedra') ||
        (opcionUsuario === 'tijera' && opcionCPU === 'papel')
    ) {
        alert('Ganaste!' + ' '+'CPU ha escogido ' + opcionCPU);
        contusuario++;
        document.getElementById('contUsuario').innerText = contusuario;

    } else {
        alert('¡Perdiste!' + ' '+'CPU ha escogido ' + opcionCPU);
        contcpu++;
        document.getElementById('contCPU').innerText = contcpu;
    }

 
}