require('colors');

const { guardarInfo, leerInfo } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostarListadoCheckList } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {

    let opt = "";
    const tareasInfo = leerInfo();
    const tareas = new Tareas();
    
    if(tareasInfo){
        tareas.cargarTareasFromArray(tareasInfo);
    }
    
    do {  
        
        //imprimir menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opción
                const descripcion = await leerInput('Descripción:');
                tareas.crearTarea(descripcion);
            break;
            case '2':
                //console.log(tareas._lista);
                //console.log(tareas.listaArr);
                tareas.listarTareas();
            break;
            case '3':
                tareas.listarCompletadasPendientes(true);
            break;
            case '4':
                //tareas.listarPendientes();
                tareas.listarCompletadasPendientes(false);
            break;
            case '5':
                const ids = await mostarListadoCheckList(tareas.listaArr);
                tareas.toggleCompletadas(ids);
                //console.log(ids);
            break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listaArr);
                if (id !== '0') {
                    const ok = confirmar('¿Está seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
            break;
        }

        guardarInfo(tareas.listaArr);
        await pausa();

    } while (opt !== "0");

    //const tarea = new Tarea("hola");
    //console.log(tareas);

    //const tareas = new Tareas();
    //console.log(tareas);
}

main();