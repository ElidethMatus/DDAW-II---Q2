import React from "react";
import { BotonIdioma } from "../models/botonIdio";

export default function BotonIdiomaC(props: BotonIdioma) {
  return (
    <button
      type="button"
      onClick={() => props.cambiarIdioma(props.idioma)}
      className="bg-blue-500 text-white p-2 rounded-md m-1"
    >
      {props.texto}
    </button>
  );
}