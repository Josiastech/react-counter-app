
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;



export const getUser = () => ({
  uid: 'AVB123',
  username: 'josias'
});


// Tarea
export const getUsuarioActivo = (nombre = 'Emanuel') => ({
  uid: 'ABC567',
  username: nombre
})

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );



