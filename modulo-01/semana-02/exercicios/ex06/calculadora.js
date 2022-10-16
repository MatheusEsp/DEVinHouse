
var op = prompt('Informe qual operação vc deseja realizar (+ ,- ,* , /)');

var num1 = parseFloat(prompt('Informe um número: '));
var num2 = parseFloat(prompt('Informe outro número: '));
var resultado = 0;

if(!isNaN(num1) || (!isNaN(num2))){ 
    switch (op) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1/num2;
            break;
    }
} else {
    alert('Digite números válidos')
}
alert(`O resultado do seu cálculo é ${resultado}`);
            