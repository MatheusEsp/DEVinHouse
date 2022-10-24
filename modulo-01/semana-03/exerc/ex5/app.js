const somaTudo = (...numeros) => {
    let acumulador = 0
    numeros.forEach(num => {
        acumulador += num;
    })
    return acumulador;
}
const resultado = somaTudo(1,2,3)

console.log("1+2+3 = ")

console.log(resultado)