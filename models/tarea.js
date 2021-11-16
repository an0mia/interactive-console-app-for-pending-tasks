const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    fechaCreacion = '';
    descripcion = '';
    completado = null;
    
    constructor (descripcion) {
        this.id = uuidv4();
        this.fechaCreacion =  new Date();
        this.descripcion = descripcion;
        this.completado = null;
    }

}

module.exports = Tarea;