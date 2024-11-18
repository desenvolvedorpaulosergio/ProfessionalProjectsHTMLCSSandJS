lista = []

function analizeLista(x,y){
    if(!(x.indexOf(y) != -1)){
        return true
    }else{
        return false
    }
}

function agrupar(){
    let numero = Number(window.document.getElementById('numero').value)
    let listaDiv = window.document.getElementById('lista-div')
    if(numero >= 1 && numero <= 100 && analizeLista(lista, numero)){
        listaDiv.innerHTML += `${numero} <br>`
        lista.push(numero)
    }else{
        alert('preencha os dados corretamente')
    }
}

function relatorio(){
    if(lista.length >= 2){
        window.document.getElementById('total-elementos').innerHTML = `${lista.length}`
        window.document.getElementById('maior-valor').innerHTML = `${Math.max(lista)}`
        // window.document.getElementById('menor-valor').innerHTML = `${}`
        // window.document.getElementById('media').innerHTML = `${}`
        // window.document.getElementById('soma-total').innerHTML = `${}`
        // window.document.getElementById('ordem-crescente').innerHTML = `${}`
        // window.document.getElementById('ordem-drescente').innerHTML = `${}`
        window.document.getElementById('relatorio-dados-display').style.display = 'block'
    }else{
        alert('é necessário ter pelo menos 2 números')
    }
}

function voltar(){
    window.document.getElementById('relatorio-dados-display').style.display = 'none'
}