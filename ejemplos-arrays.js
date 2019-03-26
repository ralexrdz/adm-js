const firstNumber = 2
const secondNumber = 3
const thirdNumber = 5
const fourthNumber = 7
const fifthNumber = 11

var texto = "asdasd asdasd"
const arreglo = [2, 3, 5, 7, 11]
//       0123
//       ||||
texto = "hola"
console.log(texto.length)
console.log(arreglo.length)
console.log(texto[2])
console.log(arreglo[2])

arreglo[0] = 500
var otroArreglo = ['a', 'b', 'c', 'e']
console.log('última posicion arreglo', arreglo.length - 1)
console.log(arreglo[arreglo.length - 1])
console.log('última posicion otroArreglo', otroArreglo.length - 1)
console.log(otroArreglo[otroArreglo.length - 1])

for (var i = 0; i<=arreglo.length; i++) {
  console.log(i + ' ' + arreglo[i]) 
}

console.log(arreglo[-1])
arreglo[5] = 23
arreglo[10] = 50

console.log(arreglo)

for (var i = 0; i< arreglo.length ; i++) {
  console.log(i + ' ' + arreglo[i]) 
}


