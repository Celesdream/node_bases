
const fs = require('fs');


const crearArchivo = async(base = 5, listar = false) => 
{

    try
    {
        let salida = "";
        for(let i = 1; i<=10; i++)
        {
            salida += `${base} X ${i} = ${base * i} \n`;

        }

        if(listar)
        {
            console.log("=======================");
            console.log(`tabla del ${base}`);
            console.log("=======================");
            console.log(salida);
        }
    
        
        fs.writeFileSync(`./textos/tabla-${base}.txt`,salida);
        console.log(`tabla-${base}.txt`)
    }

    catch(error)
    {
        throw error;
    }

        //console.log(salida);
}

module.exports = 
{
    crearArchivo
}