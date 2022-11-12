function ObterIdCliente(nomeCliente, idCliente){
    return new Promise((resolve) => {
        const cliente = { nome: nomeCliente, id: idCliente}
        resolve(cliente)
    })
}

async function processar() {
    const cliente = await ObterIdCliente('Lula', 13)
    console.log(cliente)
}

processar();