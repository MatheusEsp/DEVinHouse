
const uneDobraRetorna = (vetor, ...extras) => {
  for (let i = 0; i < extras.length; i++) {
    extras[i] *= 2;
  }
  //console.log({ vetor, extras});
  return [...vetor, ...extras];
};

const r1 = uneDobraRetorna([1, 2, 3], 4, 4)

const r2 = uneDobraRetorna([2], 10, 4, 8) 

const r3 = uneDobraRetorna([6, 8]) 

console.log("teste 1: ",r1,"Teste 2: ",r2,"Teste 3: ",r3)