let teste = 'teste'

console.log(teste)


function alteraTeste() {
    teste = 'Teste alterado'
}


console.log('2', teste)

setTimeout(() => alteraTeste(), 300)

console.log('3',teste)