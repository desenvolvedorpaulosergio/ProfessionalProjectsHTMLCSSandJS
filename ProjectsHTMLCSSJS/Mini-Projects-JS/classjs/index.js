lista = []

function analizeLista(x,y){
    if(!(x.indexOf(y) != -1)){
        return true
    }else{
        return false
    }
}

function agrupar(){
    let numero = window.document.getElementById('numero').value
    let listaDiv = window.document.getElementById('lista-div')
    if(numero >= 1 && numero <= 100 && analizeLista(lista, numero)){
        listaDiv.innerHTML += `${numero} <br>`
        lista.push(numero)
    }else{
        alert('preencha os dados corretamente')
    }
}