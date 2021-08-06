const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de miltiplicar'.yellow
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'.yellow
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde quiero que llegue la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número'.red
        }
        return true;
    })
    .argv;

module.exports = argv;