var n1 = Number(window.prompt("Digite a primeira nota: "))
var p1 = Number(window.prompt("Digite o peso da primeira nota: "))

var n2 = Number(window.prompt("Digite a segunda nota: "))
var p2 = Number(window.prompt("Digite o peso da segunda nota: "))

var n3 = Number(window.prompt("Digite a terceira nota: "))
var p3 = Number(window.prompt("Digite o peso da terceira nota: "))

var m1 = n1*p1

var m2 = n2*p2

var m3 = n3*p3

var notaFinal = (m1+m2+m3)/(p1+p2+p3)

window.alert("A nota final é: " + notaFinal)