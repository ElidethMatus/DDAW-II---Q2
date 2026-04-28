export interface BotonIdioma {
  texto: string;
  idioma: string;
  cambiarIdioma: (idioma: string) => void;
}