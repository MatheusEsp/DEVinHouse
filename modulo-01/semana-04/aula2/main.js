//const alunos = [ 'aluno 1', 'aluno 2', 'aluno 3']

// const elemtensoRemovidos = alunos.splice(2, 1)


// alunos.splice(0,0,'aluno 0')

// console.log(alunos)
// console.log(elemtensoRemovidos)

// console.log(alunos)
// const join = alunos.join(', ')

// console.log(join)

// const split = join.split(' ')

// console.log(split)

// const alunos = [
//     {nome: 'aluno 1', nota: 5},
//     {nome: 'aluno 2', nota: 2},
//     {nome: 'aluno 3', nota: 4}
// ]

// let soma = 0;
// const somarNotas = (aluno) => {
//     soma += aluno.nota
// }

// alunos.forEach(somarNotas)

// const mediaTurma = (soma/alunos.length)

// console.log(mediaTurma)
// ================================================================================


//const numeros = [1,2,3,4,5,6]

// const dobro = numeros.map((numero) => numero * 2)

// const triplo = numeros.map(function (numero){
//     return numero * 3
// })

// console.log(numeros)
// console.log(dobro)
// console.log(triplo)

//const pares = numeros.find((numeros) => numeros % 2 == 0)
//console.log(pares)
//=========================================================================================



//const pessoas = [{nome: 'Maria'}, {nome: 'marcs'}, {nome: 'joão da silva'},{nome: 'joão'}]
 
// const find = pessoas.find((pessoas) => pessoas.nome.toLowerCase().includes('joão'))
// //Compara igualzinho o nome e retorno elemento

// const filter = pessoas.filter((pessoas) => pessoas.nome.toLowerCase().includes('joão'))
// // Retorna todos q contenham o parametro em forma de array

// const some = pessoas.some((pessoas) => pessoas.nome.toLowerCase().includes('joão'))
// // Retorna true se tiver 1 igual ao parametro

// const every = pessoas.every((pessoas) => pessoas.nome.toLowerCase().includes('joão'))
// // Retorna true se todos forem igual parametro

// const findIndex = pessoas.findIndex((pessoas) => pessoas.nome.toLowerCase().includes('joão'))
// // Econtra o index do elemento igual o parametro


// console.log(find)
// console.log(filter)
// console.log(some)
// console.log(every)
// console.log(findIndex)

// =================================================================================


// const notas = [
//     {nome: 'aluno 1', nota: 10},
//     {nome: 'aluno 2', nota: 7}, 
//     {nome: 'aluno 3', nota: 6},
// ]

// const soma = notas.reduce((acc, aluno) => {
//     console.log(acc, aluno)
//     return acc += aluno.nota
// })

// console.log(soma)

// ============================================================================
const aluno = {
    nome: 'Thais',
    turma: {
        nome: 'DevInPhilips',
        dataInicio: new Date(),
    },
    notas: [
    {
        projeto: 1,
        nota: 8,
    },
    {
        projeto: 2,
        nota: 7,
    }
    ],
    imprimir: (param) => {
        return param
    },
    calcularMedia: function() {
        return this.notas.reduce((acc, projeto) => (acc += projeto.nota), 0) 
    }
}

console.log(aluno.turma.nome)

aluno.turma.nome = 'Teste'

console.log(aluno.nome)
console.log(aluno.calcularMedia)
