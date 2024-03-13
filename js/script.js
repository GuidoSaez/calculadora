let numero1, numero2, operador;

function agregarEnPantalla(numero) {
    document.getElementById('pantalla').value += numero;
}

function borradoCompleto() {
    document.getElementById('pantalla').value = '';
}

function borrar() {
    
    let numero = document.getElementById('pantalla').value;

    if (numero > 0) {
        let rta = numero.substring(0, numero.length - 1);
        document.getElementById('pantalla').value = rta;
    }
}

function operaciones(signo) {
    numero1 = parseFloat(document.getElementById('pantalla').value);
    operador = signo;
    document.getElementById('pantalla').value = '';
}

function resultado() {
    numero2 = parseFloat(document.getElementById('pantalla').value);
    let resultado;

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case 'x':        
            resultado = numero1 * numero2;
            break;
        case '÷':
            resultado = numero1 / numero2;
            break;  
    }

    document.getElementById('pantalla').value = resultado;
}

function decimal() {
    
    if (!document.getElementById('pantalla').value.includes('.')) {
        document.getElementById('pantalla').value += '.';
    }
}

