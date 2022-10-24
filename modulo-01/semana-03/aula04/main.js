console.log('m1-s03-a4')


// mais exemplos de escopo
// const nome = 'inicializado'


// if (1) {
//     const nome = 'bloco'
// }

// function teste(){
//     const nome = 'função'

// }

// teste();

// console.log({ nome })


// exemplo rest ( ... )

//Multiplica pelo 1º parametro
function somaParametro(x,...numeros){
    console.log({ numeros })

    let acumulador = 0;

    numeros.forEach(numero => acumulador += numero)

    return  x * acumulador;
}


const resultado = somaParametro(10,2,3,4,5,6);

console.log(resultado)

