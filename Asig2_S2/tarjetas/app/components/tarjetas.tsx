import React from 'react'
import { ListaPersonas } from '../models/listPersonas'

export default function ListadoPersonas({ listaPersonas }: ListaPersonas) {
  return (
    <div className="row">
      {listaPersonas.map((persona) => (
        <div className="card mb-3" key={persona.id}>
          <div className="card-body">

            <h5 className="card-title">{persona.nombre}</h5>

            <p className="card-text">
              <strong>Ocupación:</strong> {persona.ocupacion}
            </p>

            <p className="card-text">
              <strong>País:</strong> {persona.pais}
            </p>

          </div>
        </div>
      ))}
    </div>
  )
}