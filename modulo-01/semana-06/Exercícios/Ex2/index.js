const isBrowser = typeof window != 'undefined'

const horasAtuais = () => {
    const intervalo = setInterval(function (){
        const dataAtual = new Date()
        const dataHora = dataAtual.toLocaleTimeString('pt-BR')
        
        if(isBrowser){const span = document.getElementById('relogio')
    span.innerText = dataHora}
    }, 2000)
}

/* Parando o temporizador 
    setTimeout (() => {
        clearInterval(intervalo)
    },10000)
}
*/

horasAtuais()
