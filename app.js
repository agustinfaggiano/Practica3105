let tareasTraidas = require('./Tareas/tareas.json');
let {listarTareas, guardarNuevaTarea, borrarTarea, filtrarPorEstado }= require('./Funciones/funcionesDeTareas');

let tareaParaAgregar = {
    codigo: 322,
    titulo: "Practicar GIT",
    estado: "Terminada"
};

guardarNuevaTarea(tareasTraidas,tareaParaAgregar);

//tareasTraidas = borrarTarea(tareasTraidas,322);

listarTareas(tareasTraidas);
let tareasFiltr = filtrarPorEstado(tareasTraidas, "Terminada");
//listarTareas(tareasFiltr); //muestro las tareas filtradas


