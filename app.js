//required


const argv = require('./config/yargs').argv;


// const fs = require ('expres')
// const fs = require ('./fs')



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log('crear');
        break;

    default:
        console.log('comando no reconocido');


}

//console.log(process.argv);
//let argv2 = process.argv;
//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]