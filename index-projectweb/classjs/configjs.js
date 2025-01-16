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

//Configurações do Evento Projetos Web:

function eventoProjetosWeb(){
    window.document.getElementById('config-display-ancoras').style.display = 'block'
    window.document.getElementById('config-display-mensagem').style.display = 'none'
}


//configurações de aviso:

function eventoConfirmacaoNegativa(){
    window.document.getElementById('config-display-container2').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto';
}

function eventoConfirmacaoPositiva(){
    window.document.getElementById('config-display-container2').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto';
}

function eventoForm1(){
    document.getElementById('config-display-container2').style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function(){
    window.document.getElementById('form1').addEventListener('click', function(){
        document.getElementById('config-display-container2').style.display = 'block'
        document.getElementById('elemento-positivo').addEventListener('click', function(){
            window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalProjectsHTMLCSSandJS/index-projectweb/projects-pdf/form-user.pdf"
        })
    })

    window.document.getElementById('form2').addEventListener('click', function(){
        document.getElementById('config-display-container2').style.display = 'block'
        document.getElementById('elemento-positivo').addEventListener('click', function(){
            window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Layouts/perfil-formulario.pdf"
        })
    })
})