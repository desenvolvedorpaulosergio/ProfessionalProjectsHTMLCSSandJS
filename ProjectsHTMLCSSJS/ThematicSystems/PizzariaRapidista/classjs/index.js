function eventonavegador(){
    let opcoes = window.document.querySelectorAll('.opcoes')
    opcoes.forEach(opcoes => {
        if(opcoes.style.display == 'block'){
            opcoes.style.display = 'none'
        }else{
            opcoes.style.display = 'block'
        }
    })
}

function largurabory(){
    let opcoes = window.document.querySelectorAll('.opcoes')
    if(window.innerWidth > 563){
        opcoes.forEach(opcoes => {
            opcoes.style.display = 'block'
        })
    }else{
        opcoes.forEach(opcoes => {
            opcoes.style.display = 'none'
        })
    }
}