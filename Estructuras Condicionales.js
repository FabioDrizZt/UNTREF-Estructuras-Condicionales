// Estructura condicional simple --> SI, IF
const edad = 17
if (edad >= 18) {
  console.log('Eres mayor de edad')
}
if (!(edad >= 18)) {
  console.log('Eres menor de edad')
}
console.log('fin del programa.')
// Estructura condicional doble --> SINO, ELSE
if (edad >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}
// Estructura condicional doble anidada
const nota = 71
if (nota >= 90) {
  console.log('Aprobaste con honores')
} else if (/* nota < 90 && */ nota >= 80) {
  // no es necesario preguntar la condicion negada
  console.log('Aprobaste con distincion')
} else if (nota >= 70) {
  console.log('Aprobaste')
} else if (nota >= 60) {
  console.log('Reprobaste')
} /* if (nota < 60) */ else {
  // no es necesario
  console.log('No aprobaste')
}

const hora = 14
if (hora < 12) {
  console.log('Buenos dias')
} else if (hora < 18) {
  console.log('Buenas tardes')
} else {
  console.log('Buenas noches')
}

// if ternario --> condicion ? expresionSiVerdadero : expresionSiFalso

const age = 16
const mensaje = age >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'
console.log({ mensaje })
console.log(age >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad')

const hour = 14
const saludo =
  hora < 12 ? 'Buenos dias' : hora < 18 ? 'buenas tardes' : 'buenas noches'

// Estructura condicional compuesta/multiple --> SEGUN, SWITCH, CASE

const dia = 8
/* if (dia == 1) {
  console.log('lunes')
} else if (dia == 2) {
  console.log('martes')
} else if (dia == 3) {
  console.log('miercoles')
}
 */
switch (dia) {
  default:
    console.log('dia desconocido')
    break
  case 6:
    console.log('sabado')
  case 7:
    console.log('domingo')
  case 1:
    console.log('lunes')
  case 2:
    console.log('martes')
  case 3:
    console.log('miercoles')
  case 4:
    console.log('jueves')
  case 5:
    console.log('viernes')
}

const notaAlumno = 11
switch (notaAlumno) {
  case 1:
  case 2:
    console.log('desaprobado')
    break
  case 3:
  case 4:
  case 5:
    console.log('desaprobado')
    break

  default:
    console.log('No aplica');
    break
}
