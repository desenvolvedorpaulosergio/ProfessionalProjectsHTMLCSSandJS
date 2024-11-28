function tamanhoBody(){
    if(window.innerWidth < 570){
        window.document.getElementById('container-estilo-opcoes').style.display = 'none'
    }
}

function eventoEquiv(){
    if(window.document.getElementById('container-estilo-opcoes').style.display == 'block'){
        window.document.getElementById('container-estilo-opcoes').style.display = 'none'
    }else{
        window.document.getElementById('container-estilo-opcoes').style.display = 'block'
    }
}