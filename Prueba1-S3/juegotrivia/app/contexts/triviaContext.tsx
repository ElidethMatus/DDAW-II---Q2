'use client'
import { createContext } from 'react';
import { Pregunta } from '../models/trivia';

export const contextTrivia = createContext({

    puntaje: 0,

    preguntas: [] as Pregunta[],

    preguntaActual: 0,

    resultado: "",

    responder: (respuesta: boolean) => { },

    siguientePregunta: () => { },

    reiniciarJuego: () => { }
})