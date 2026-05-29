'use client'
import { useState, useEffect } from "react";
import Boton from "./components/botones";

export default function Home() {

  const [idioma, setIdioma] = useState<string>("es");
  const [lista, setLista] = useState<string[]>([]);

  const palabras = [
    { es: "Luz", en: "Light" },
    { es: "Palabra", en: "Word" },
    { es: "Auriculares", en: "Headphones" },
    { es: "Escuela", en: "School" },
    { es: "Libro", en: "Book" },
    { es: "Mesa", en: "Table" },
    { es: "Suelo", en: "Floor" },
    { es: "Agua", en: "Water" },
    { es: "Sol", en: "Sun" },
    { es: "Luna", en: "Moon" }
  ];

  function cambiarIdioma(nuevoIdioma: string): void {
    setIdioma(nuevoIdioma);
  }

 useEffect(() => {

  const nuevaLista = palabras.map((p) => p[idioma]);
  setLista(nuevaLista);
}, [idioma]);
  return (
    <main>

      <h1>Lista de palabras</h1>

      <ul>
        {
          lista.map((palabra: string, index: number) => (
            <li key={index}>{palabra}</li>
          ))
        }
      </ul>

      <Boton
        texto="Cambiar a Español"
        idioma="es"
        cambiarIdioma={cambiarIdioma}
      />

      <Boton
        texto="Cambiar a Inglés"
        idioma="en"
        cambiarIdioma={cambiarIdioma}
      />

    </main>
  );
}