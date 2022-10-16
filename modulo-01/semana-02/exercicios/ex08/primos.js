var qtd = 0;
var limite = 1000;
for( var i= 2; i <= limite; i++){
    var primo = true
    for (var j = 2; j < i; j++){
        if(i % j === 0){
            primo = false
        }
    }
    if(primo){
        qtd++
        console.log(i)
    }
}
console.log(`Exitem ${qtd} números primos de 0 a 1000`)
