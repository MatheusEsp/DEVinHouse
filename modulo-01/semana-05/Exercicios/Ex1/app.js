import Funcionario from './Funcionario.js'

const funcionario = new Funcionario(
    '12345678900',
    'Matheus Espindola',
    1300
)

console.log(funcionario)
funcionario.promover(10)
console.log('Dando aumento de 10%')


console.log(funcionario)