const Tarea = require('./tarea');

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach( key  => {
            listado.push( this._listado[key] );
        });

        return listado;
    }
    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( (tarea) => {
            this._listado[tareas.id] = tarea;
        } )

    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${ i + 1 }`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);
        })
    }

}


module.exports = Tareas;