let tareasTraidas = require('./Tareas/tareas.json');
let {listarTareas, guardarNuevaTarea, borrarTarea, filtrarPorEstado }= require('./Funciones/funcionesDeTareas');

let tareaParaAgregar = {
    codigo: 23,
    titulo: "Ser prolijo",
    estado: "Terminada"
};

//guardarNuevaTarea(tareasTraidas,tareaParaAgregar);

//tareasTraidas = borrarTarea(tareasTraidas,4);
//listarTareas(tareasTraidas);
let tareasFiltr = filtrarPorEstado(tareasTraidas, "Terminada");
listarTareas(tareasFiltr); //muestro las tareas filtradas


