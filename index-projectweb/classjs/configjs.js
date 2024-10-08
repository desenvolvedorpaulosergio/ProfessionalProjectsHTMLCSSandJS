function tamanhoBody(){
    if(window.innerWidth > 550){
        window.document.getElementById('config-display-opcoes').style.display = 'none'  
    }
}

function eventoEquiv(){
    if(window.document.getElementById('config-display-opcoes').style.display == 'block'){
        window.document.getElementById('config-estilo-opcoes').style.animationName = "animacaoOpcoes2"
        setTimeout(function(){
            window.document.getElementById('config-display-opcoes').style.display = 'none'
        },200)
    }else{
        window.document.getElementById('config-estilo-opcoes').style.animationName = "animacaoOpcoes"
        window.document.getElementById('config-display-opcoes').style.display = 'block'
    }
}

// Configurações de Modal de Carregamento:

setInterval(function(){
    window.document.getElementById('config-display-container4').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
},2000)