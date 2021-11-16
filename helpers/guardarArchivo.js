const fs = require('fs');

const archivo = './db/data.json';

const guardarInfo = (data) => {
   
    try {
        fs.writeFileSync(archivo, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    } 

}

const leerInfo = () => {

    if (!fs.existsSync(archivo)){
        return null;
    }

    try {
        const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
        const data = JSON.parse(info);
        return data;
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    guardarInfo,
    leerInfo
}