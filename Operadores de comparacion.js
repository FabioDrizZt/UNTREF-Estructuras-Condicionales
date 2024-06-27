// igualdad
console.log(1 == 1)
console.log(1 == '1') // verdadero, mismo valor
console.log(1 == 2)
// igualdad estricta
console.log(1 === 1)
console.log(1 === '1') // falso, distinto tipo de dato
console.log(1 === 2)
// desigualdad
console.log(1 != 1)
console.log(1 != '1') // verdadero por conversion de tipo
console.log(1 != 2)
// desigualdad estricta
console.log(1 !== 1)
console.log(1 !== '1') // verdadero, tipos de datos distintos
console.log(1 !== 2)
// mayor que
console.log(1 > 1)
console.log(2 > 1)
// mayor o igualque que
console.log(1 >= 1)
console.log(2 >= 1)
console.log(2 >= 3)
// en la practica
const edad = 18
const MAYORIA_EDAD = 18
console.log(edad >= MAYORIA_EDAD)
// menor que
console.log(1 < 1)
console.log(2 < 1)
// menor o igualque que
console.log(1 <= 1)
console.log(2 <= 1)
console.log(2 <= 3)
// Comparacion en strings
const fruta1 = 'manzana'
const fruta2 = 'banana'
const fruta3 = 'banana'
console.log(fruta1 > fruta2) // true, alfabeticamente o basado en orden diccionario
console.log(fruta2 > fruta1) // true, alfabeticamente o basado en orden diccionario
console.log(fruta3 === fruta2)
// comparacion en objetos o arrays no deberian hacerse
const producto1 = { nombre: 'uva' }
const producto2 = { nombre: 'uva' }
const frutas1 = ['anana', 'uva']
const frutas2 = ['anana', 'uva']
console.log(producto1 == producto2) // false, comparacion de referencia
console.log(frutas1 == frutas2) // false, comparacion de referencia
// conectando !
