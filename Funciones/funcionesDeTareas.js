let fs = require ('fs');

function listarTareas(tareas){
    tareas.forEach(function (elemento){
        console.log (elemento.titulo);
    }); 
}

function guardarNuevaTarea(tareas, nuevaTarea){
    tareas.push(nuevaTarea); // Grabo en Memoria
    fs.writeFileSync('./Tareas/tareas.json', JSON.stringify(tareas, null, ' ')); // Grabo Físicamente el Archivo
    //no necesito hacer un return porque al hacer el push ya está en memoria
}


function borrarTarea(tareas, cod){
    
    let tareasActualizado = tareas.filter(function(elemento){
        return (elemento.codigo!=cod); //retorna todas aquellas cuyo cod sea diferente del enviado
    });

    fs.writeFileSync('./Tareas/tareas.json', JSON.stringify(tareasActualizado, null, ' '));
    return tareasActualizado; // retorno el nuevo array de tareas sin la que quise borrar
}

function filtrarPorEstado(tareas,est){
    let tareasFiltradas = tareas.filter(function(elemento){
        return (elemento.estado == est);
    });
    return tareasFiltradas;
}

module.exports = {listarTareas, guardarNuevaTarea, borrarTarea, filtrarPorEstado};