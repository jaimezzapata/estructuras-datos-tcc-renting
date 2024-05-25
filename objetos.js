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

// let nombre = prompt('Ingrese su nombre: ')
// let edad = prompt("Ingrese su edad: ");
// const persona = {
//   nombre: "Jaime",
//   edad,
//   caminar: function () {
//     console.log(`La persona ${this.nombre} está caminando...`);
//   },
//   dormir: function () {
//     const that = this;
//     console.log(`La persona ${that.nombre} está durmiendo...`);
//   },
/* CallBacks */
// };
// console.log(`Esta persona se llama: ${persona.nombre}`)
// console.log(`Esta persona tiene esta edad: ${persona.edad}`)
// persona.caminar()
// persona.dormir();
/* CallBack -> Llamando una funcion flecha dentro de un método de un arreglo y pasarle la ejecución */

/* Variables Globales */
// let ubicacion = {
//   pais: "Colombia",
//   ciudad: "Medellin",
//   direccion: {
//     calle: 25,
//     carrea: 25,
//   },
// };
// let nombre = "Jaime Zapata";
// let trabajar = function () {
//   console.log(`${this.nombre} está trabajando`);
// };
// let hobbies = []
/* Variables Globales */
/* Objeto literal General */
// const persona = {
//   nombre,
//   edad: 33,
//   correo: "correo@correo.com",
//   trabajar,
//   ubicacion,
//   hobbies
// };
// console.log(persona.nombre);
// console.log(persona.ubicacion.pais);
/* Objeto literal General 
    Creando el objeto y asignando internamete los atributos
*/

// persona.nombre
// persona.trabajar()
// persona
// console.log(`Atriubuto estructurado ${persona.nombre}`);

// let estudiante = {
//     nombre: 'Jaime',
//     edad: 32,
//     correo: 'correo@correo.com',
// } /* Estructuración -> Creación o deifnición de un objeto */
// // console.log(estudiante.nombre)
// let {nombre, edad} = estudiante
