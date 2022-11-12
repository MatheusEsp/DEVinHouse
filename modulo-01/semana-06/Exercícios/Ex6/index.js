const buscaIdade = async(nome) => {
    try{
        const resultado = await fetch(`https://api.agify.io/?country_id=BR&name=thais`)
        const data = await resultado.json()
        console.log(`${nome} - ${data.age}`)

    } catch (error){
        console.error(error)
    }
}

buscaIdade('Matheus')
