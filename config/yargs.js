const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea en consola la tabla de multiplicar con la base ingresada hasta el limite ingresado', opts)
    .help()
    .argv;


module.exports = {
    argv
}