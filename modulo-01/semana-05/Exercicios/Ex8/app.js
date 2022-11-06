import Usuario from './Usuario.js'


const cUsuario = document.getElementById('campo-usuario')
const cSenha = document.getElementById('campo-senha')
const bAcessar = document.getElementById('botao-acessar')
const pMensagem = document.getElementById('p-mensagem')

const u1 = new Usuario(
  'Matheus',
  'teste',
  'teste'
)

bAcessar.addEventListener('click', () => {
  const usuario = cUsuario.value
  const senha = cSenha.value
  if (u1.autenticar(usuario, senha)) {
    pMensagem.innerHTML = 'Login realizado!'
  } else {
    pMensagem.innerHTML = 'Email ou senha inválidos'
  }
})