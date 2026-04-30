'use client'
import React, { useEffect, useState } from 'react'
import { Persona } from '../models/personas'
import ListadoPersonas from './tarjetas';

export default function AppPersonas() {

  const [listaPersonas, setListaPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const personasIniciales: Persona[] = [
      { id: 1, nombre: 'Juan Perez', ocupacion: 'Ingeniero', pais: 'Honduras' },
      { id: 2, nombre: 'Maria Lopez', ocupacion: 'Doctora', pais: 'México' },
      { id: 3, nombre: 'Carlos Ruiz', ocupacion: 'Profesor', pais: 'España' },
      { id: 4, nombre: 'Ana Torres', ocupacion: 'Diseñadora', pais: 'Argentina' },
      { id: 5, nombre: 'Luis Gomez', ocupacion: 'Programador', pais: 'Colombia' }
    ];

    setListaPersonas(personasIniciales);
  }, []);

  return (
    <div className="container mt-4">
      <ListadoPersonas listaPersonas={listaPersonas} />
    </div>
  );
}