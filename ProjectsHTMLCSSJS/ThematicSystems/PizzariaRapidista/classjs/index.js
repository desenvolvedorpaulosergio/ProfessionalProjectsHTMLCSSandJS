//Configurações JavaScript part 1:

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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('eventosenha').addEventListener('change', function() {
        let senha = document.getElementById('senha');
        if (this.checked) {
            senha.type = 'text';
        } else {
            senha.type = 'password';
        }
    });
})