const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta) => {

    try {


        let salida = '';
        let consola = '';


        for (let i = 0; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } = ${ base * i }\n`;
        }


        if (listar) {
            console.log('======================='.green);
            console.log('    Tabla del: ', colors.blue(base));
            console.log('======================='.green);
            console.log(consola);
        }



        fs.writeFileSync(`./salida/tabla-${ base }`, salida);

        return `Tabla - ${ base }.txt creada`.rainbow;

    } catch (error) {

        throw error;
    }
}



module.exports = {
    crearArchivo
}