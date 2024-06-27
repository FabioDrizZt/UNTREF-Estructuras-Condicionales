const a = true
const b = false
// conjuncion --> Y, AND --> &&
// solo es true cuando ambos son true
console.log(b && b)
console.log(a && b)
console.log(b && a)
console.log(a && a)
// con algebra booleana
// true = 1
// false = 0
// and --> multiplicar (*)
// 0*0 = 0
// 0*1 = 0
// 1*0 = 0
// 1*1 = 1

// disyuncion --> O, OR --> ||
// solo es false cuando ambos son false
console.log(b || b)
console.log(a || b)
console.log(b || a)
console.log(a || a)
// con algebra booleana
// true = 1
// false = 0
// or --> sumar (+)
// 0+0 = 0
// 0+1 = 1
// 1+0 = 1
// 1+1 = 1

// negación --> NO, NOT --> !
// devuelve el valor logico contrario
console.log(!b)
console.log(!a)

// Validar si una persona puede manejar
const edad = 18
const tieneLicencia = true
const estaSobrio = true
const puedeManejar = edad >= 18 && tieneLicencia && estaSobrio
console.log({ puedeManejar })

// Cortocircuito
// si el primer valor es false, no se evalua el segundo
const user = null
const userName = user && user.name // será null xq user es null
console.log(userName)
const usuario = { name: 'Fabio' }
const nombreUsuario = usuario && usuario.name
console.log(nombreUsuario)

const nickName = ''
// ?? Devuelve el primer operador que no sea null o undefined
const nombreAMostrar = nickName ?? 'John Doe' // nombreAMostrar será John Doe
// || devuelve el primer operador que no sea falso
//const nombreAMostrar = nickName || 'John Doe' // nombreAMostrar será John Doe
console.log(nombreAMostrar)
