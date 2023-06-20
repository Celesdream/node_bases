const argv =  require('yargs')
.option('b',{
    alias : 'base',
    type: 'number',
    demandOption: true,
    describe : 'Toma la base de la tabla de multiplicar'

}).option('l',{
    alias: 'listar',
    type: 'boolean',
    default:false,
    describe : 'lista la tabla'
    
})
.check((argv,options)=>
{
    if(isNaN(argv.base))
    {
        throw 'la base tiene que ser un numero';
    }
    return true;
})
.argv;

module.exports = argv;