function eventoEquiv(){
    let symbols = window.document.querySelectorAll('.material-symbols-outlined');
    let opcoes = window.document.querySelectorAll('.estilo-opcao-geral');
    let icone = window.document.getElementById('config-icone');
    opcoes.forEach(function(opcoes){
        if(opcoes.style.display == 'block'){
            icone.style.display = 'none'
            opcoes.style.display = 'none'
        }else{
            opcoes.style.display = 'block'
            icone.style.display = 'block'
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

function configBody(){
    let symbols = window.document.querySelectorAll('.material-symbols-outlined')
    let opcoes = window.document.querySelectorAll('.estilo-opcao-geral')
    let icone = window.document.getElementById('config-icone')
    let equiv = window.document.getElementById('estilo-equiv')
    let config_display = window.document.querySelectorAll('.config-display')

    if(window.innerWidth > 642){
        symbols.forEach(function(symbols){
            symbols.style.display = 'block'
        })
        opcoes.forEach(function(opcoes){
            opcoes.style.display = 'block'
        })
        icone.style.display = 'block';
        equiv.style.display = 'none';
    }else{
        symbols.forEach(function(symbols){
            symbols.style.display = 'none'
        })
        opcoes.forEach(function(opcoes){
            opcoes.style.display = 'none'
        })
        icone.style.display = 'none';
        equiv.style.display = 'block';
    }
    config_display.forEach(function(config_display){
        config_display.style.display = 'block'
    })
}