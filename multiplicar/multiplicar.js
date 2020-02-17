//Importar libreria
const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    console.log('================');
    console.log(`tabla de ${base}`);
    console.log('================');

    //Hacer la multiplicacion
    for (let i = 1; i <= limite; i++) {
        let res = base * i;
        console.log(`${base} * ${i} = ${res}`);
    }
}

//Metodo para crear el archivo de la tabla
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //Validar que la base es un numero
        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`);
            return;
        }

        let data = '';

        //Hacer la multiplicacion
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base} * ${i} = ${res}\n`;
        }

        //Escribir la operacion en el archivo de texto
        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}