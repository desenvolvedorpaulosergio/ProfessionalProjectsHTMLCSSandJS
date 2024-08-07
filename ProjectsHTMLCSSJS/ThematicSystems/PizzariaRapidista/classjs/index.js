function eventonavegador(){
    let opcoes = window.document.querySelectorAll('.opcoes')
    opcoes.forEach(function(opcoes){
        if(opcoes.style.display == 'block'){
            opcoes.style.display = 'none'
        }else{
            opcoes.style.display = 'block'
        }
    })
}

function largurabory(){
    let opcoes = window.document.querySelectorAll('.opcoes')
        opcoes.forEach(function(opcoes){
        if(window.innerWidth > 562){
            opcoes.style.display = 'block'
        }else{
            opcoes.style.display = 'none'
        }
    })
}