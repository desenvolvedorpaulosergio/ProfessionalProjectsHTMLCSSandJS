alert('Selecione um número de 1 a 100 por vez sem repetir. Visualize o relatório do conjunto dos números agrupados por você.')

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
        let mediaLista= lista.reduce((a,b) => a+b)/lista.length;
        window.document.getElementById('total-elementos').innerHTML = `${lista.length}`
        window.document.getElementById('maior-valor').innerHTML = `${Math.max(...lista)}`
        window.document.getElementById('menor-valor').innerHTML = `${Math.min(...lista)}`
        window.document.getElementById('media').innerHTML = `${mediaLista.toFixed(2)}`
        window.document.getElementById('soma-total').innerHTML = `${lista.reduce((a,b) => a+b)}`
        window.document.getElementById('ordem-crescente').innerHTML = `${lista.sort((a,b) => a - b)}`
        window.document.getElementById('ordem-decrescente').innerHTML = `${lista.sort((a,b) => b - a)}`
        window.document.getElementById('relatorio-dados-display').style.display = 'block'
    }else{
        alert('é necessário ter pelo menos 2 números')
    }
}

function voltar(){
    window.document.getElementById('relatorio-dados-display').style.display = 'none'
}
