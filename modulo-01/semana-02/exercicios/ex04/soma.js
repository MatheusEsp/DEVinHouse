var fim = false;
var soma = 0;
while(!fim) {
    var numero = parseInt(prompt("Digite um número: "));
    if (!isNaN(numero) && numero != -1){
        soma += numero;
    }
    if (numero == -1) {
        fim = true;
    }
}
alert(`a soma é ${soma}`);