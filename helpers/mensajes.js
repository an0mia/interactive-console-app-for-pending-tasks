const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {

    return new Promise((resolve) => {
        console.clear();
        console.log("============================".rainbow);
        console.log("   Seleccione una opción".yellow);
        console.log("============================\n".rainbow);

        console.log(`${"[1]".green} Crear tarea`);
        console.log(`${"[2]".green} Listar tareas`);
        console.log(`${"[3]".green} Listar tareas completadas`);
        console.log(`${"[4]".green} Listar tareas pendientes`);
        console.log(`${"[5]".green} Completar tarea(s)`);
        console.log(`${"[6]".green} Borrar tarea`);
        console.log(`${"[0]".red} Salir \n`);

        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readLine.question("> ", (opt) => {
            readLine.close();
            resolve(opt);
        });
    });

};

const pausa = () => {
    const readLine = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`\nPresione ${"ENTER".green} para continuar\n`, () => {
        readLine.close();
        resolve();
    });
} 

module.exports = {
    mostrarMenu,
    pausa
}