'use client'
import { createContext } from 'react'
import { Tarea } from '../models/formInter';

export const contextFormulario = createContext({
    tareas: [] as Tarea[],

    agregarTarea: (tarea: Tarea) => {},

    cambiarEstado: (id: number) => {}
})