
const campo = document.getElementById('nome')
const botao = document.getElementById('botao')
const p = document.getElementById('paragrafo')

const mensagemOla = (nome) => `Olá, ${nome}!`;

botao.addEventListener('click', () =>{
    const nome = campo.value
    const mensagem = mensagemOla(nome)

    p.innerHTML = mensagem
    console.log(mensagem)
})

