const dia = new Date();
const hora = dia.getHours();
const minutos = dia.getMinutes();
const segundos = dia.getSeconds();

let linkarClick = document.getElementById("res-click")

//FUNÇÃO ATIVA O CAPTADOR POR MEIO DE UM EVENTO
function captadorAtivar() {
linkarClick.innerHTML = `<strong>Você clicou!! no horário: ${hora} horas, ${minutos} minutos e ${segundos} segundos</strong>`
}

//FUNÇÃO RELOGA A PAGINA
function reloadPage() {
    const page = document.location.reload()
    return page
}
