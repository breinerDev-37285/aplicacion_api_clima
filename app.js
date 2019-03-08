const { argv } = require('./config/yargs')
const { clima } = require('./clima/clima')
const colors = require('colors')

let command = argv._[0];

if(command==='ciudad'){
    clima( argv.nombre, argv.pais )
            .then( data => {
                let dat = `Cod_pais: ${data.sys.country}\nlatitud: ${data.coord.lat}\nlongitud: ${data.coord.lon}\ntemperatura: ${data.main.temp} Cº\npresion:${data.main.pressure}\nhumedad: ${data.main.humidity}`;
                console.log(`\n\nciudad: ${data.name}`.magenta)
                console.log(dat.cyan)
            })
}else{
    console.log(`no existe el comando ${command}`)
}