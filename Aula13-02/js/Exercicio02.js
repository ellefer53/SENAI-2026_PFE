const corpo = document.querySelector('.corpo')
const titulo = document.querySelector('.titulo')
const divisoria = document.querySelector('.divisoria')
const botao = document.querySelector('.botao')

corpo.style.backgroundColor = '#000000'
titulo.style.fontFamily = 'arial'
titulo.style.color = 'white'
botao.style.cursor = 'pointer'
botao.style.padding = '15px 30px'
botao.style.backgroundColor = '#121212'
botao.style.color = 'white'
botao.style.fontFamily = 'arial'
botao.style.fontWeight = 'BOLD'
botao.style.borderRadius = '12px'
botao.style.border = '3px #252525 solid'


botao.addEventListener('click', () => {
    titulo.textContent = 'Titulo daora'
    divisoria.innerHTML = '<img src="./IMG/a.jpg"></img>'
    alert('Você clicou no botao')
})


