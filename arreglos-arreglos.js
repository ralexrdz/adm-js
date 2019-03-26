var matriz = [
  [1,2,3,4],
  [5,6,7,8,9,10,11,12,13,14,15],
  ['a', 'b', 'x', 'y'],
  ['asdasdasd']
]

console.log('toda la matriz', matriz)

console.log('primera fila', matriz[0])
var fila1 = matriz[0]
console.log('segundo elemento de la primera fila', fila1[1], matriz[0][1] )

for (var indiceFila = 0; indiceFila < matriz.length ; indiceFila++) {
  var fila =  matriz[indiceFila]
  for (var indiceColumna = 0; indiceColumna < fila.length; indiceColumna++) {
    console.log(indiceFila, indiceColumna, matriz[indiceFila][indiceColumna])
  }
}