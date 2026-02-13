const corpo = document.querySelector('body')
const titulo = document.querySelector('.titulo')
const divisoria = document.querySelector('.divisoria')
const divimg = document.querySelector('.daimg')
const botao = document.querySelector('.botao')

corpo.style.backgroundColor = 'white'
titulo.textContent = 'SESI - SENAI'

divisoria.style.width = '94vw'
divisoria.style.backgroundColor = '#d90000'
divisoria.innerHTML += '<h2>UC</h2>'
divisoria.style.margin ='0 auto'

divimg.innerHTML += '<img src="./IMG/a2.jpg"></img>'
divimg.style.backgroundColor = '#000'

let contador = 0

botao.addEventListener('click', () => {
    alert('Você clicou no botao ' + contador + ' Vezes')
    contador++
})

