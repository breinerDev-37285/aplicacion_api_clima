const argv = require('yargs')
            .command('ciudad','Especifica la ciudad a buscar',{
                nombre:{
                    alias: 'c',
                    demand: true,
                    desc: 'Nombre de la ciudad'
                },
                pais:{
                    alias: 'p',
                    demand: false,
                    default: '',
                    desc: 'Ingresa las iniciales del pais para una busquedad mas precisa'
                }
            })
            .help()
            .argv
            
module.exports = {
    argv
}