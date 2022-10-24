

const concatenando = ({ nome,idade, profissao }) => 
`${nome}, tem ${idade}, e trabalha como ${profissao}.`
        

const cartao = {
    nome: 'Matheus',
    idade: 26 ,
    profissao: 'Engenheiro',
};

const msg = concatenando(cartao)
console.log(msg)