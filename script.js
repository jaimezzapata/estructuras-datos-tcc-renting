// for (let index = 0; index < 3; index++) {
// const estudiante = {
//     nombre: prompt('Ingrese un nombre: '),
//     edad: prompt('Ingrese la edad: '),
//     estatura: prompt('Ingrese la estatura: '),
//     estudiar: function () {
//         console.log('Estudiando...')
//     }
// }
// console.log(estudiante.nombre)
// if (estudiante.edad >= 18) {
//     console.log('Mayor de edad')
// }
// estudiante.nombre = 'Camilo'
// console.log(estudiante.nombre)
// estudiante.nota = 4.5
// console.log(estudiante)
// estudiante.estudiar()
// }

let nombre = prompt('Ingrese su nombre: ')
let edad = prompt('Ingrese su edad: ')
const persona = {
    nombre, edad,
    caminar: function () {
        console.log('Caminando..')
    },
    dormir: () => {
        console.log('Durmiendo...')
    }
}
console.log(`Esta persona se llama: ${persona.nombre}`)
console.log(`Esta persona tiene esta edad: ${persona.edad}`)
persona.caminar()
persona.dormir()