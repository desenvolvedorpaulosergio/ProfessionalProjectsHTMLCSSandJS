var caixaEntrada = window.document.getElementById('caixa-entrada')
var caixaArray = []

function evento1(){
    window.document.getElementById('caixa-entrada').innerHTML += 1
}

function evento2(){
    window.document.getElementById('caixa-entrada').innerHTML += 2
}

function evento3(){
    window.document.getElementById('caixa-entrada').innerHTML += 3
}

function evento4(){
    window.document.getElementById('caixa-entrada').innerHTML += 4
}

function evento5(){
    window.document.getElementById('caixa-entrada').innerHTML += 5
}

function evento6(){
    window.document.getElementById('caixa-entrada').innerHTML += 6
}

function evento7(){
    window.document.getElementById('caixa-entrada').innerHTML += 7
}

function evento8(){
    window.document.getElementById('caixa-entrada').innerHTML += 8
}

function evento9(){
    window.document.getElementById('caixa-entrada').innerHTML += 9
}

function eventoDelete(){
    window.document.getElementById('caixa-entrada').innerHTML = ""
    caixaEntrada = []
}

function eventoSoma(){
    window.document.getElementById('caixa-entrada').innerHTML += "+"
}

function eventoMenos(){
    window.document.getElementById('caixa-entrada').innerHTML += "-"
}

function eventoMult(){
    window.document.getElementById('caixa-entrada').innerHTML += "*"
}

function eventoDiv(){
    window.document.getElementById('caixa-entrada').innerHTML += "/"
}

//Nova função "eval(variável)": função que interpreta as operações entre asplas duplas e calcula.
function eventoIgual(){
    window.document.getElementById('caixa-entrada').innerHTML = eval(calculo)
    let calculo = window.document.getElementById('caixa-entrada').innerHTML
}