const verificaPalindromo = texto =>{
    if(typeof texto !== 'string'){
        console.log('Texto inválido')
        return false
    }
    return[...texto].reverse().join('') === texto
}


const teste1 = verificaPalindromo("ana");

console.log("Verificando palindromo")
console.log("ana?", teste1)


const teste2 = verificaPalindromo("Marcos")
console.log("Verificando palindromo")
console.log("Marcos?", teste2)