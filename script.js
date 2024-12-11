const vvv = document.getElementById('vvv')

const fon = document.getElementById('fon')
fon.addEventListener('click', function () {
    vvv.style.backgroundColor = 'blue'
})


const rrr = document.getElementById('rrr')


const rr = document.getElementById('rr')
rr.addEventListener('mouseenter', function(){
    rrr.style.color = 'red'
})

rr.addEventListener('mouseleave', function(){
    rrr.style.color = 'black'
})

const text = document.getElementById('text')


const ttt = document.getElementById('ttt')
ttt.addEventListener('click', function(){
text.innerText = 'Мәтін тексті өзгерді'
})

const ever = document.getElementById('ever')

const date = document.getElementById('date')
date.addEventListener('click', function (){
    ever.innerText = 'Бүгін 13.12.2024'
})

const taza = document.getElementById('taza')
taza.addEventListener('click', function(){
    ever.innerText = 'Бүгін'
    text.innerText = 'Бұл абзацтың мәтіні өзгеріледі'
    vvv.style.backgroundColor = 'white'
})