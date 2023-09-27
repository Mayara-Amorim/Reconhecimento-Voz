function validaChute(chute) {
    const num = +chute;

    if(chuteForInvalido(num)){
        elementoChute.innerHTML+=`<div>Valor Invalido</div>`
        return
  
    }
    if(validaNumeroMaiorMenor(num)){
       elementoChute.innerHTML+=`<div>
       Valor inválido.Fale um numero entre ${maiorValor} e ${menorValor};
       </div>`//este precisam ser o maior valor e o menor valor da constante do sorteio(pois é aqui que definimos o minimo e maximo) não o do html.
       return
       
    }

    if(num === numeroSecreto){
        document.body.innerHTML =`
        <div>
         <h2> Voce acertou!!! </h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>
         </div>
         <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

    }else if (num > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor<i class="fa-solid fa-circle-down"></i></div>
        `
            
    }else{
        elementoChute.innerHTML += `
            <div>O numero secreto é maior<i class="fa-solid fa-circle-up"></i></div>
            `
    }
}
function chuteForInvalido(num) {
    Number.isNaN(num)
}

function validaNumeroMaiorMenor(num) {
    return num > maiorValor || num < menorValor
}
document.body.addEventListener("click", e=>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})