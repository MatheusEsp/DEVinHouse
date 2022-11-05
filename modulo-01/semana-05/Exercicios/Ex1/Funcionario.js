export default class Funcionario{
    constructor(cpf, nomeCompleto, salario){
         if(Funcionario.validaCPF(cpf)){
             console.log('CPF válido')
         } else{
             console.log('CPF Inválido')
         }
        this.cpf = cpf
        this.nomeCompleto = nomeCompleto
        this.salario = salario
    }

    promover(percentual){
        percentual /= 100
        return this.salario *= 1 + percentual 
    }
    static validaCPF(cpfCru) {
        const cpf = cpfCru.replaceAll('.', '').replaceAll('-', '')
        let soma = 0
        let resto
        
        if (cpf == "00000000000") {
          return false
        }
    
        for (let i = 1; i <= 9; i++) {
          soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
        }
    
        resto = (soma * 10) % 11
    
        if ((resto == 10) || (resto == 11)) {
          resto = 0
        }
      
        if (resto !== parseInt(cpf.substring(9, 10))) {
          return false
        }
    
        soma = 0
        for (let i = 1; i <= 10; i++) {
          soma += parseInt(cpf.substring(i-1, i)) * (12 - i)
        }
    
        resto = (soma * 10) % 11
    
        if ((resto == 10) || (resto == 11)) {
          resto = 0
        }
      
        if (resto != parseInt(cpf.substring(10, 11))) {
          return false
        }
    
        return true
      }
    }