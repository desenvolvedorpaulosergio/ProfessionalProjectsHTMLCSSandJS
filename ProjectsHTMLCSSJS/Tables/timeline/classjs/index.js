window.document.addEventListener('DOMContentLoaded', function(){
    let data = new Date().getFullYear()
    document.getElementById('config-estilo2').innerHTML = `${data}`
})

function eventoInprimir(){
    window.print()
}

function eventoAdd(){
    let tagTr = document.createElement('tr')
    let tagTd = document.createElement('td')

    let tagTd2 = document.createElement('td')
    let tagTd3 = document.createElement('td')
    let tagTd4 = document.createElement('td')
    let tagTd5 = document.createElement('td')
    let tagTd6 = document.createElement('td')
    let tagTd7 = document.createElement('td')
    let tagTd8 = document.createElement('td')

    tagTd.setAttribute('contenteditable', 'true')
    tagTd2.setAttribute('contenteditable', 'true')
    tagTd3.setAttribute('contenteditable', 'true')
    tagTd4.setAttribute('contenteditable', 'true')
    tagTd5.setAttribute('contenteditable', 'true')
    tagTd6.setAttribute('contenteditable', 'true')
    tagTd7.setAttribute('contenteditable', 'true')
    tagTd8.setAttribute('contenteditable', 'true')

    tagTd.className = 'config-padrao-coluna1'

    tagTr.appendChild(tagTd)
    tagTr.appendChild(tagTd2)
    tagTr.appendChild(tagTd3)
    tagTr.appendChild(tagTd4)
    tagTr.appendChild(tagTd5)
    tagTr.appendChild(tagTd6)
    tagTr.appendChild(tagTd7)
    tagTr.appendChild(tagTd8)

    let tabela = document.getElementById('elemento-tabela')
    tabela.appendChild(tagTr)
}