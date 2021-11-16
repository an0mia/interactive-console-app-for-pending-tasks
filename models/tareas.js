require('colors');

const Tarea = require('./tarea');

class Tareas {

    _lista = {};

    get listaArr(){
        const lista = []
        Object.keys(this._lista).forEach(key => {
            const tarea = this._lista[key];
            lista.push(tarea);
        }); 
        return lista;
    }

    constructor (){
        this._lista = {};
    }

    borrarTarea(id = ''){
        if(this._lista){
            delete this._lista[id];
        }
    }

    crearTarea(descripcion = ''){
        const tarea = new Tarea(descripcion);
        this._lista[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea => {
            this._lista[tarea.id] = tarea;
        });
    }

    listarTareas(){

        console.log();

        this.listaArr.forEach( (tarea, i) => {
            const index = `${ i + 1 }`.green
            const { descripcion, fechaCreacion, completado } = tarea;
            const estado = (completado) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${index} ${descripcion} :: ${estado}`);
        });
    }

    listarCompletadasPendientes( completadas = true ){

        console.log();
        let con = 0;

        if (completadas) {

            this.listaArr.forEach( (tarea) => {
                const { descripcion, fechaCreacion, completado } = tarea;
                const estado = (completado) ? 'Completada'.green : 'Pendiente'.red;
                if(completado){
                    con += 1;
                    console.log(`${(con + '.').green} ${descripcion} :: ${estado} :: ${completado}`);    
                }
            });

        } else {

            this.listaArr.forEach( (tarea) => {
                const { descripcion, fechaCreacion, completado } = tarea;
                const estado = (completado) ? 'Completada'.green : 'Pendiente'.red;
                if(!completado){
                    con += 1;
                    console.log(`${(con + '.').red} ${descripcion} :: ${estado} :: ${fechaCreacion}`);    
                }
            });

        }
    }

    toggleCompletadas( ids = [] ) {
        
        ids.forEach( id => {
            const tarea = this._lista[id];
            if(!tarea.completado){
                tarea.completado = new Date().toISOString();
            }
        });

        this.listaArr.forEach( tarea => {

            if( !ids.includes(tarea.id)) {
                this._lista[tarea.id].completado = null;
            }
        });
    }

}

module.exports = Tareas;