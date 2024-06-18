let nombre = prompt('Ingrese su nombre.');
let producto = '';
let total = 0;
let cantidad = 0;
let precio = 0;
let seguirComprando = false;

function saludar() {
    alert('Bienvenido ' + nombre + ' a Siempre Nuevas.');
}

function Compra() {
    saludar();

    seguirComprando = true; 

    while (seguirComprando) {
        producto = prompt('¿Desea usted comprar: Cardigan o una Campera de cuero?');

        switch (producto) {
            case 'Cardigan':
                precio = 30000;
                break;
            case 'Campera de cuero':
                precio = 40000;
                break;
            case 'terminar':
                seguirComprando = false;
                break;
            default:
                alert('Hubo un problema, intente más tarde.');
                seguirComprando = false;
                break;
        }

        if (producto === 'Cardigan' || producto === 'Campera de cuero') {
            alert(`Usted eligió ${producto}.`);
            cantidad = parseInt(prompt('Ingrese la cantidad de productos'));
            total = precio * cantidad;
            alert(`Usted eligió ${producto}. El total es ${total}.`);

            seguirComprando = confirm(`El total es ${total}. ¿Desea seguir comprando?`);
        }
    }

    alert('Gracias por su compra.');
}

Compra(); 