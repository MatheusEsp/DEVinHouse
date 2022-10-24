/*
const obj = {
    texto: "O rato roeu a roupa do rei de Roma. ",
    termo: "batata"
}


function procuraTermo(objeto){
   return objeto.texto.includes(objeto.termo); 
}

console.log(procuraTermo(obj))
*/

/*
function procuraTermo(objeto){
    const { texto, termo} = objeto
    return texto.includes(termo); 
 }
 */

 const obj = {
    texto: "O rato roeu a roupa do rei de Roma. ",
    termo: "batata"
}

function procuraTermo( { texto, termo}){
    return texto.includes(termo); 
 }