export default class Time{
    vitorias = 0
    derrotas = 0
    empates = 0
    golsMarcados = 0
    golsSofrido = 0

    constructor(nome, sigla){
        this.nome = nome
        this.sigla =  sigla
    }

    get numeroDeJogos(){
        return this.vitorias + this.derrotas + this.empates
    }


    get numeroDePontos(){
        return this.empates + (this.vitorias * 3)
    }

    computarPartida(p){
        let golsMarcados = 0
        let golsSofridos = 0

        if(p.siglaTimeA === this.sigla){
            golsMarcados = p.golsTimeA
            golsSofridos = p.golsTimeB
        } else if( p.siglaTimeB === this.sigla){
            golsMarcados = p.golsTimeB
            golsSofridos = p.golsTimeA
        } else
            return
        

        if(golsMarcados > golsSofridos)
            this.vitorias ++
        else if (golsMarcados < golsSofridos)
            this.derrotas++
        else
            this.empates++
        
        this.golsMarcados += golsMarcados
        this.golsSofridos += golsSofridos
    }

    exibirSituacao(){
        console.log(`Timne: ${this.nome}(${this.sigla})`)
        console.log(`Vitorias: ${this.vitorias}`)
        console.log(`Derrotas: ${this.derrotas}`)
        console.log(`Empates: ${this.empates}`)
        console.log(`Gols Marcados: ${this.golsMarcados}`)
        console.log(`Gols Sofridos: ${this.golsSofridos}`)
    }
}