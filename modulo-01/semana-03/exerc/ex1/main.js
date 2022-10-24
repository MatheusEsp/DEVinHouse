let a = 0

let b = 0

let vetor = []

var vetor1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
var vetor2 = []
var vetor3 = [1]
var vetor4 = [1, -1]
var vetor5 = null
var vetor6 = [-2,-2,-2,-2] 
var vetor7 = [20,10, 30]  

function procuraMinMax(num1, num2,array){
    vetor = array.sort()
    menor = array[0]
    maior = array[array.length -1]
    if(isNaN(array[0]) || (array[0] == "" )){
        console.log(`Não é possível encontrar valor para o vetor ${array}`)
    }
    return {menor,maior,array}
}

//console.log(vetor5)

const resultado = procuraMinMax(a,b,vetor1)

const resulta2 = procuraMinMax(a,b,vetor2)

console.log(resulta2)

console.log(resultado)

