'use client'
import Preguntas from './components/preguntas';
import Puntajes from './components/puntajes';
import ProviderTrivia from './providers/triviaProvider';

export default function Home() {

  return (
    <ProviderTrivia>

      <Puntajes />

      <Preguntas />

    </ProviderTrivia>
  )
}