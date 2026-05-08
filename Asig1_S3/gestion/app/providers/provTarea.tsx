'use client'
import { useContext, useState } from 'react'
import { Tarea } from '../models/formInter';
import { View } from '../models/view';
import { contextFormulario } from '../contexts/ContextForm';

export function ProviderTarea(props: View) {

    const [tareas, setTareas] = useState<Tarea[]>([
        {
            id: 1,
            titulo: "Estudiar React",
            descripcion: "Repasar Context API y hooks",
            estado: "Pendiente"
        },
        {
            id: 2,
            titulo: "Hacer tarea",
            descripcion: "Completar la ToDo List en Next.js",
            estado: "En Proceso"
        },
        {
            id: 3,
            titulo: "Leer documentación",
            descripcion: "Investigar useContext",
            estado: "Completada"
        },
        {
            id: 4,
            titulo: "Diseñar tabla",
            descripcion: "Crear estructura visual de tareas",
            estado: "Pendiente"
        },
        {
            id: 5,
            titulo: "Probar aplicación",
            descripcion: "Verificar que el Context funcione",
            estado: "En Proceso"
        }
    ]);

    function agregarTarea(tarea: Tarea) {

        tarea.id = tareas.length + 1;

        setTareas([...tareas, tarea]);
    }

   function cambiarEstado(id: number) {

    const nuevasTareas = tareas.map((tarea) => {

        if (tarea.id === id) {

            let nuevoEstado = "";

            if (tarea.estado === "Pendiente") {
                nuevoEstado = "En Proceso";
            }

            else if (tarea.estado === "En Proceso") {
                nuevoEstado = "Completada";
            }

            else {
                nuevoEstado = "Pendiente";
            }

            return {
                ...tarea,
                estado: nuevoEstado
            };
        }

        return tarea;
    });

    console.log(nuevasTareas);
    setTareas(nuevasTareas);
    }

    return (
        <contextFormulario.Provider value={{ tareas, agregarTarea, cambiarEstado }}>
            {props.children}
        </contextFormulario.Provider>
    )
}

export function useTarea() {
    return useContext(contextFormulario);
}