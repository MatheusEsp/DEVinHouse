let clientes = []

function addCliente(evento){
    evento.preventDefault()
    console.log(evento.target.name.value);

    const cliente = {
        nome: evento.target.name.value
        
    }
}

const formulario = document.getElementById('form')

formulario.addEventListener('submit', addCliente)