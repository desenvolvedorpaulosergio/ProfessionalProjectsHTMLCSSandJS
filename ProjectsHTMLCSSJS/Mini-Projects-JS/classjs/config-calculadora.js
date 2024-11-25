var caixaEntrada = window.document.getElementById('caixa-entrada')
var caixaArray = []

function evento1(){
    window.document.getElementById('caixa-entrada').innerHTML += 1
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(1);
}

function evento2(){
    window.document.getElementById('caixa-entrada').innerHTML += 2
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(2);
}

function evento3(){
    window.document.getElementById('caixa-entrada').innerHTML += 3
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(3);
}

function evento4(){
    window.document.getElementById('caixa-entrada').innerHTML += 4
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(4);
}

function evento5(){
    window.document.getElementById('caixa-entrada').innerHTML += 5
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(5);
}

function evento6(){
    window.document.getElementById('caixa-entrada').innerHTML += 6
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(6);
}

function evento7(){
    window.document.getElementById('caixa-entrada').innerHTML += 7
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(7);
}

function evento8(){
    window.document.getElementById('caixa-entrada').innerHTML += 8
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(8);
}

function evento9(){
    window.document.getElementById('caixa-entrada').innerHTML += 9
    caixaEntrada.innerHTML = caixaArray.join(', ')
    caixaArray.push(9);
}

function eventoDelete(){
    window.document.getElementById('caixa-entrada').innerHTML = ""
    caixaEntrada = []
}

