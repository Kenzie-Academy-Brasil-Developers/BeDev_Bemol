/*
PASSO A PASSO

1) CAPTURAR O ELEMENTO INPUT COM O TEMPO => ok
2) FAZER UMA FUNÇÃO QUE MOSTRA O TEMPO DO INPUT => ok
3) ADICIONAR UM EVENTO, NO INPUT, PARA MOSTRAR OS MESES NA TELA => ok
4) CAPTURAR O ELEMENTO BUTTON => ok
5) FAZER UMA FUNÇÃO QUE CALCULA OS PONTOS
    5.1) CAPTURAR O ELEMENTO INPUT COM O VALOR => ok
    5.2) CAPTURAR OS SPANS DA PONTUAÇÃO => ok
    5.3) ARMAZENAR OS MESES EM UMA VARIÁVEL => ok
    5.4) CRIAR UMA VARIÁVEL PARA ACUMULAR A PONTUAÇÃO => ok
    5.5) FAZER UMA CONDICIONAL CASO O MÊS SEJA ZERO => ok
    5.6) FAZER UMA CONDICIONAL CASO O MÊS SEJA MAIOR QUE ZERO => ok
6) ADICIONAR O EVENTO DE CLICK NO BOTÃO PARA EXECUTAR A FUNÇÃO ACIMA => ok

*/

const inputTempo = document.querySelector(".inputSlideTempo")
let pontosAcumulados = 0

function mostrarTempo() {
    let spanTempo = document.querySelector(".contagemTempo")
    spanTempo.innerText = `${inputTempo.value} meses`
}

inputTempo.addEventListener("change", mostrarTempo)


const button = document.getElementsByClassName("simulatorButton")[0]

function calcularPontos() {
    const inputValor = document.getElementById("valorInput").value

    const pontosDia = document.querySelector("#pontosConquistadosDia")
    const pontosMes = document.querySelector("#pontosConquistadosMes")

    const meses = inputTempo.value

    if (meses == 0) {
        pontosMes.innerText = 0 
        if (inputValor < 40) {
            pontosDia.innerText = 0
        } else {
            let resultado = inputValor / 40
            pontosDia.innerText = resultado
        }
    } else {
        if (inputValor < 40) {
            pontosDia.innerText = 0
            pontosMes.innerText = 0
        } else {
            let resultado = inputValor / 40 
            pontosDia.innerText = resultado

            let totalMensal = resultado * 30
            pontosMes.innerText = totalMensal * meses
        }
    }

}

button.addEventListener("click", calcularPontos)
