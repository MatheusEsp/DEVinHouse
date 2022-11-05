//  Criando classes

class Retangulo{
    blah = "tralala"


    constructor(altura, largura){
        //console.log({ altura, largura })
        this.altura = altura
        this.largura = largura
    }

    calculaArea(){
        return this.largura * this.altura
    }
}


const retA = new Retangulo(3, 6)

const retB = new Retangulo(4, 5)

console.log(retA)

console.log(retB) // Retangulo

console.log(`Área: ${retA.calculaArea()}`)

console.log(`Área: ${retB.calculaArea()}`)