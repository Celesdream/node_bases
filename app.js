
const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors  = require('colors');

console.clear();


crearArchivo(argv.base,argv.listar)
.then(nombreArchivo => console.log(colors.yellow(nombreArchivo),'creado'))
.catch(error => console.log(error));