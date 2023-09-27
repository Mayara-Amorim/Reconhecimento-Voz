const maiorValor = 1000;
const menorValor = 1;
const numeroSecreto = gerarNum();

function gerarNum(){
    return parseInt(Math.random() * maiorValor +1);
}
console.log(numeroSecreto);

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorValor;