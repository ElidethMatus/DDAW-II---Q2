'use client'
import { useTrivia } from '../providers/triviaProvider';

export default function Puntaje() {

    const { puntaje } = useTrivia();

    return (
        <h1>Puntaje: {puntaje}</h1>
    )
}