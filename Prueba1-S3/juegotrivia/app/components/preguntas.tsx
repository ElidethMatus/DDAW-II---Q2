'use client'
import { useTrivia } from '../providers/triviaProvider';

export default function Preguntas() {

    const {
        preguntas,
        preguntaActual,
        responder,
        resultado,
        siguientePregunta,
        reiniciarJuego
    } = useTrivia();

    if (preguntas.length === 0) {
        return <h2>Cargando...</h2>
    }

    if (preguntaActual >= preguntas.length) {

        return (
            <div>
                <h2>Trivia finalizada</h2>
                <button onClick={reiniciarJuego}>
                    Reiniciar Juego
                </button>
            </div>
        )
    }

    return (
        <div>
            <h2>
                {preguntas[preguntaActual].descripcionPregunta}
            </h2>

            <button onClick={() => responder(true)}>
               Verdadero
            </button>
            <button onClick={() => responder(false)}>
                Falso
            </button>

            <h3>{resultado}</h3>

            {resultado !== "" && (
                <button onClick={siguientePregunta}>
                    Siguiente Pregunta
                </button>
            )}

            <button onClick={reiniciarJuego}>
                Reiniciar Juego
            </button>

        </div>
    )
}