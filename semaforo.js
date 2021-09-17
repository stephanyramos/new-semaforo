"use strict"

let idAmarelo
let idVermelho
let idVerde

const semaforo = document.getElementById("semaforo")
let idInterval

const ligarVermelho = () => semaforo.src = "./img/vermelho.png"

const ligarAmarelo = () => semaforo.src = "./img/amarelo.png"

const ligarVerde = () => semaforo.src = "./img/verde .png"

function desligarSemaforo() {
    if(!ligarAutomatico()) {
        semaforo.src = "./img/desligado .png"
    }
}

const semaforoDesligado = () => semaforo.src = "./img/desligado .png"



function automaticoLigado() {
    if (ligarAutomatico) {
    } else {
        semaforoDesligado()
    }
}

const ligarAutomatico = () => {
    const botaoAutomatico = document.getElementById("automatico")
    if (botaoAutomatico.textContent == "Automatico"){
    idVermelho = setInterval(ligarVermelho, 500)
    idAmarelo = setInterval(ligarAmarelo, 1000)
    idVerde = setInterval(ligarVerde, 1500)
    document.getElementById("automatico").textContent = "Automatico"
    } else{
        
        botaoAutomatico.textContent = "Automatico"
    }
}

//Eventos
document.getElementById("vermelho")
    .addEventListener("click", ligarVermelho)

document.getElementById("amarelo")
    .addEventListener("click", ligarAmarelo)

document.getElementById("verde")
    .addEventListener("click", ligarVerde)

document.getElementById("automatico")
    .addEventListener("click", ligarAutomatico)