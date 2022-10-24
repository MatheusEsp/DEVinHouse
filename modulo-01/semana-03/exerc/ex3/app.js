console.log("Exercício 3")

let numeros = [1,2,3]

let letras = ["a","b","c"]

function concatena(vetor1, vetor2){
    return[...vetor1, ...vetor2]
}
console.log("Array 1")
console.log(numeros)

console.log("Array2")
console.log(letras)


const novoArray = concatena(numeros,letras)

console.log("Concatenados")
console.log(novoArray)