const objUm = {
    a: 1,
    b: 2,
}

const objDois = {
    c: 3,
    d: 4,
}

const mesclaObjetos = (objeto1, objeto2) => ({ ...objeto1, ...objeto2 });


console.log("Objeto 1:")
console.log(objUm)

console.log("Objeto 2:")
console.log(objDois)

const objNovo = mesclaObjetos(objUm, objDois)
console.log("Spread objetos: ")
console.log(objNovo)