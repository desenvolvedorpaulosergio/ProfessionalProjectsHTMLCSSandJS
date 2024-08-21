function eventoEquiv(){
    let symbols = window.document.querySelectorAll('.material-symbols-display');
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
    let symbols = window.document.querySelectorAll('.material-symbols-display')
    let opcoes = window.document.querySelectorAll('.estilo-opcao-geral')
    let icone = window.document.getElementById('config-icone')
    let equiv = window.document.getElementById('estilo-equiv')

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
}

    let item1 = window.document.getElementById('item1')
    let item2 = window.document.getElementById('item2')
    let item3 = window.document.getElementById('item3')
    item1.addEventListener(click, function(){
        alert('89ijui')
    })