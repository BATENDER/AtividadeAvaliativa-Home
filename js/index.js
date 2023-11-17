const btnTt= document.querySelector('#btn-tt')
const btnImgTt = document.querySelector('#btn-img-tt')
const btnYt= document.querySelector('#btn-yt')
const btnImgYt = document.querySelector('#btn-img-yt')
const btnFace= document.querySelector('#btn-face')
const btnImgFace = document.querySelector('#btn-img-face')
const btnInsta= document.querySelector('#btn-insta')
const btnImgInsta = document.querySelector('#btn-img-insta')


btnTt.addEventListener('mouseover', alteraLogo1)
btnTt.addEventListener('mouseleave', alteraLogodeVolta1)
btnYt.addEventListener('mouseover', alteraLogo2)
btnYt.addEventListener('mouseleave', alteraLogodeVolta2)
btnFace.addEventListener('mouseover', alteraLogo3)
btnFace.addEventListener('mouseleave', alteraLogodeVolta3)
btnInsta.addEventListener('mouseover', alteraLogo4)
btnInsta.addEventListener('mouseleave', alteraLogodeVolta4)

function alteraLogo1() {
    btnImgTt.setAttribute('src', '../imgs/icones/logo-escuro-twitter.svg')
}
function alteraLogo2() {
    btnImgYt.setAttribute('src', '../imgs/icones/logo-escuro.svg')
}
function alteraLogo3() {
    btnImgFace.setAttribute('src', '../imgs/icones/logo-escuro-facebook.svg')
}
function alteraLogo4() {
    btnImgInsta.setAttribute('src', '../imgs/icones/logo-escuro-insta.svg')
}


function alteraLogodeVolta1() {
    btnImgTt.setAttribute('src', '../imgs/icones/logo-branco-twitter.svg')
}
function alteraLogodeVolta2() {
    btnImgYt.setAttribute('src', '../imgs/icones/logo-branco.svg')
}
function alteraLogodeVolta3() {
    btnImgFace.setAttribute('src', '../imgs/icones/logo-branco-facebook.svg')
}
function alteraLogodeVolta4() {
    btnImgInsta.setAttribute('src', '../imgs/icones/logo-branco-insta.svg')
}