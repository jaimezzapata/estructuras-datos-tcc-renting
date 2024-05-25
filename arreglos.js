// let variasCosas = [
//   "Jaime",
//   123,
//   true,
//   { nombre: "Jaime", edad: 32 },
//   [1, 2.3],
//   function () {
//     console.log("Hola Grupo");
//   },
// ];

// console.log(variasCosas);
// console.log(variasCosas[0]);
// console.log(variasCosas[1]);
// console.log(variasCosas[2]);
// console.log(variasCosas[3]);
// console.log(variasCosas[4]);
// variasCosas[5]();
// variasCosas[1] = false
// variasCosas[0] = 25*25
// console.log(variasCosas[1]);
// console.log(variasCosas[0]);

// let variasCosas = [true, false];
// console.log(variasCosas);

// variasCosas.pop()
// console.log(variasCosas);
// variasCosas.pop()
// console.log(variasCosas);
// variasCosas.push('Jaime')
// console.log(variasCosas);
// variasCosas.push(true)
// variasCosas.push(false)
// variasCosas.push(25)
// console.log(variasCosas);
// variasCosas.shift()
// console.log(variasCosas);
// variasCosas.shift()
// console.log(variasCosas);
// variasCosas.unshift([])
// console.log(variasCosas);
// variasCosas.unshift(function(){})
// console.log(variasCosas);
// let persona = {
//     nombre: 'Jaime',
//     edad: 33
// }
// variasCosas.push(persona)
// variasCosas.unshift(persona)
// console.log(variasCosas);

let personas = [
  {
    nombre: "Stella",
    edad: 22,
    correo: "sanmore0@pen.io",
    genero: "F",
  },
  {
    nombre: "Ardenia",
    edad: 38,
    correo: "aantoniewski1@mlb.com",
    genero: "F",
  },
  {
    nombre: "Corinne",
    edad: 38,
    correo: "cnotton2@zimbio.com",
    genero: "F",
  },
  {
    nombre: "Raynard",
    edad: 29,
    correo: "rcatto3@mit.edu",
    genero: "M",
  },
  {
    nombre: "Shayna",
    edad: 34,
    correo: "sscrowson4@ow.ly",
    genero: "F",
  },
  {
    nombre: "Eddy",
    edad: 37,
    correo: "eayree5@mtv.com",
    genero: "M",
  },
  {
    nombre: "Lion",
    edad: 28,
    correo: "ltutt6@dell.com",
    genero: "M",
  },
  {
    nombre: "Stacie",
    edad: 28,
    correo: "sgash7@indiegogo.com",
    genero: "F",
  },
  {
    nombre: "Bradney",
    edad: 23,
    correo: "btommeo8@over-blog.com",
    genero: "M",
  },
  {
    nombre: "Pebrook",
    edad: 20,
    correo: "pcron9@bloglines.com",
    genero: "M",
  },
  {
    nombre: "Elnar",
    edad: 22,
    correo: "ecomia@tmall.com",
    genero: "M",
  },
  {
    nombre: "Tam",
    edad: 37,
    correo: "talvesb@pagesperso-orange.fr",
    genero: "M",
  },
  {
    nombre: "Jeramie",
    edad: 32,
    correo: "jbarstowc@si.edu",
    genero: "M",
  },
  {
    nombre: "Esmeralda",
    edad: 33,
    correo: "earmitaged@microsoft.com",
    genero: "F",
  },
  {
    nombre: "Sidnee",
    edad: 23,
    correo: "strenholme@altervista.org",
    genero: "M",
  },
  {
    nombre: "Rosalinda",
    edad: 38,
    correo: "rguisbyf@livejournal.com",
    genero: "F",
  },
  {
    nombre: "Griffie",
    edad: 39,
    correo: "gvasnevg@princeton.edu",
    genero: "M",
  },
  {
    nombre: "Ingrid",
    edad: 34,
    correo: "iberrh@fema.gov",
    genero: "F",
  },
  {
    nombre: "Eda",
    edad: 33,
    correo: "erameloti@tripod.com",
    genero: "F",
  },
  {
    nombre: "Renado",
    edad: 34,
    correo: "rchattoj@youtube.com",
    genero: "M",
  },
];

// let nuevasPersonasFiltro = personas.filter((item)=> item.edad > 25)
personas.forEach((item)=> {
    if(item.edad > 25){
        console.log(item)
    }
})

// let nuevasPersonas = personas.map((item)=> item.edad = item.edad*5)
// console.log(nuevasPersonas)
// console.log(personas)