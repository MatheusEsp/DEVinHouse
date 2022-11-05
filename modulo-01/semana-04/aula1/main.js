/*
let a = [
    10,
    20,
    30
]

let b = [...a]

const pessoa = {
   nome: "teste",
   idade: 20,
   sexo: 'M',
}

const { nome, ...params } = pessoa;

console.log(nome, params)

console.log(a,b)
*/

const alunos = [
    'aluno 0 ',
    'aluno 1 ',
    'aluno 2 ',
    'aluno 3 '
]
//Adiciona no vetor
const add = alunos.push('aluno 4')

console.log(` Alunos: ${alunos} | Tamanho: ${add}`)

const del = alunos.pop()

console.log(alunos, del)

const slice = alunos.slice(0,2)

console.log(slice)
