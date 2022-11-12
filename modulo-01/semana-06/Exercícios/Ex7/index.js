const precoBitcoin = async() => {
    const resultado = await fetch(`https://api.coincap.io/v2/assets/bitcoin`)
    const {data} = await resultado.json()
    console.log(`O preço do Bitcoin(${data.symbol}) em dólares hoje é: ${data.priceUsd} `)
}
precoBitcoin()