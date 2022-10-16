function calculaFaixaEtaria(){
    var idade = document.getElementById("valorIdade").value

    var resultado = document.getElementById("resultadoIdade")

    if(idade < 16)
        resultado.innerHTML = "Pessoas com menos de 16 anos são consideradas Jovens."
    else if(idade >= 16 && idade < 64 )
        resultado.innerHTML = "Pessoas entre 16 e 64 anos são consideradas Adultos."
    else if( idade >= 65)
        resultado.innerHTML = "Pessoas com mais de 64 anos são consideradas Idosos."
}

