var mapa = [
  ['a', 'a', '-', '-', '-', 'c'], 
  ['-', '-', '-', '-', '-', 'c'], 
  ['-', '-', '-', '-', '-', 'c'], 
  ['-', '-', 'b', '-', '-', 'c'], 
  ['-', '-', 'b', '-', '-', 'c'], 
  ['-', '-', 'b', '-', '-', '-'], 
]

console.log(mapa[0].toString())
console.log(mapa[1].toString())
console.log(mapa[2].toString())
console.log(mapa[3].toString())
console.log(mapa[4].toString())
console.log(mapa[5].toString())

function tira (y, x) {
  console.log ('y: ' + y)
  console.log('x: ' + x)
  if (x < 0 || x >= 6 || y < 0 || y >= 6) {
    // console.log('ni al mapa le atinaste', y, x)
    let spanError = document.getElementById('error')
    spanError.innerHTML = 'ni al mapa le atinaste'
    setTimeout(function () {
      spanError('error').innerHTML = ''
    }, 3000)
  } else {

    var id = 'celda-' + y + '-' + x   
    console.log('id: ' + id ) // celda-0-1
    document.getElementById(id).innerHTML = mapa[y][x]

    if (mapa[y][x] != '-') {
      console.log('le pegaste al barco: ' + mapa[y][x], y, x)
      // document.getElementById
    } else {
      console.log('no le pegaste a nanais', y, x)
    }
  }
}

function tiraInputs () {
  var yValue = document.getElementById('y-input').value
  var xValue = document.getElementById('x-input').value
  console.log('y: ' + yValue) // num
  console.log('x: ' + xValue)

  tira(yValue, xValue)
} 

// tira(0,-1) // ni al mapa
// console.log(mapa)
// tira(3,3) // -
// console.log(mapa)
// tira(4,5) // -
// console.log(mapa)
// tira(0,0) // a
// console.log(mapa)
// tira(3,2) // b
// console.log(mapa)
// tira(0,5) // c
// console.log(mapa)
