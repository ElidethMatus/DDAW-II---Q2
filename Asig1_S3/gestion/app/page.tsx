'use client'
import Tareas from './components/TTareas';
import { ProviderTarea } from './providers/provTarea';

export default function Home() {

  return (
    <ProviderTarea>

      <Tareas />

    </ProviderTarea>
  )
}