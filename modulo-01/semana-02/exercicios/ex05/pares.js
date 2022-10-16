var num = parseInt(prompt('Digite um número positivo: '))
var somaImpar = 0;
var somaPar = 0;

if(isNaN(num) || num <= 0){
    alert("Digite um número válido")
} else {
    for(var i = 0; i<=num; i++){
        if((i % 2) == 0){
            somaPar++;
        }else{
            somaImpar++;
        }
    }   
}
alert(`De 0 até ${num} existem: \n ${somaPar} números pares. \n ${somaImpar} números impares`);


