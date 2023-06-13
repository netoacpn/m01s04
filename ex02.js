var altura = Number(window.prompt ('Digite a altura em metros:'))
var peso = Number(window.prompt ('Digite o peso em Kg:'))
const media = peso/(altura**2)
window.alert("Seu IMC é de " + media.toFixed(2))