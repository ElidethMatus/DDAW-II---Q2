'use client'
import { useContext, useEffect, useState } from 'react'
import { Pregunta } from '../models/trivia';
import { View } from '../models/view';
import { contextTrivia } from '../contexts/triviaContext';

export default function ProviderTrivia(props: View) {

    const [puntaje, setPuntaje] = useState(0);
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [resultado, setResultado] = useState("");

    useEffect(() => {

        setPreguntas([
            {
                idPregunta: "1",
                descripcionPregunta: "React fue creado por Facebook",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1
            },
            {
                idPregunta: "2",
                descripcionPregunta: "Next.js es un lenguaje",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: false,
                puntajePregunta: 1
            },
            {
                idPregunta: "3",
                descripcionPregunta: "useState es un hook",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1
            },
            {
                idPregunta: "4",
                descripcionPregunta: "CSS se usa para estilos",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1
            },
        ]);

    }, []);

    function responder(respuesta: boolean) {
        const pregunta = preguntas[preguntaActual];
        if (respuesta === pregunta.respuestaCorrecta) {
            setPuntaje(puntaje + pregunta.puntajePregunta);
            setResultado("Correcto");
        }
        else {
            setResultado("Incorrecto");
        }
    }
    function siguientePregunta() {
        setPreguntaActual(preguntaActual + 1);
        setResultado("");
    }
    function reiniciarJuego() {
        setPuntaje(0);
        setPreguntaActual(0);
        setResultado("");
    }
    return (
        <contextTrivia.Provider
            value={{
                puntaje,
                preguntas,
                preguntaActual,
                resultado,
                responder,
                siguientePregunta,
                reiniciarJuego
            }}
        >
            {props.children}
        </contextTrivia.Provider>
    )
}

export const useTrivia = () => {
    return useContext(contextTrivia);
}