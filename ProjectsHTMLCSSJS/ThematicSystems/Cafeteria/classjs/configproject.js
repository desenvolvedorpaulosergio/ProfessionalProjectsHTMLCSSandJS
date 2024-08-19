function eventoEquiv(){
    let opcoes = window.document.querySelectorAll('.estilo-opcao-geral');
    let symbols = window.document.querySelectorAll('.material-symbols-outlined');
    opcoes.forEach(function(opcoes){
        if(opcoes.style.display == 'block'){
            opcoes.style.display = 'none'
        }else{
            opcoes.style.display = 'block'
        }
    })
    symbols.forEach(function(symbols){
        if(symbols.style.display == 'block'){
            symbols.style.display = 'none'
        }else{
            symbols.style.display = 'block'
        }
    })
}