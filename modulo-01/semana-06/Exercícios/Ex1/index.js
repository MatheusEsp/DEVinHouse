function sleep(valor) {
    return new Promise ((resolve) => {
        setTimeout (() => resolve(valor), 3000)
    })
}

sleep('Testando Sleep').then(function (resultado){
    console.log(resultado)
})
.catch((erro) => console.log(`Erro: ${erro}`))

.finally(() => {
    console.log('Finalizado')
})
